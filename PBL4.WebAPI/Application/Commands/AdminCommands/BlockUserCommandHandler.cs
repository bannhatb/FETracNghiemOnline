using MediatR;
using Pbl4.Domain.Entities;
using Pbl4.Domain.Enum;
using Pbl4.Domain.Repositories;
using PBL4.WebAPI.Infrastructure.Response;
using PBL4.WebAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.AdminCommands
{
    public class BlockUserCommandHandler : IRequestHandler<BlockUserCommand, Response<ResponseDefault>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IIdentityServices _identityServices;
        public BlockUserCommandHandler(IUserRepository userRepository,
            IIdentityServices identityServices)
        {
            _userRepository = userRepository;
            _identityServices = identityServices;
        }
        public async Task<Response<ResponseDefault>> Handle(BlockUserCommand request, CancellationToken cancellationToken)
        {
            User user = _userRepository.Users.FirstOrDefault(x => x.Id == request.userId);
            if(user == null)
            {
                return new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.NotFound
                };
            }
            List<int> roleIds = _userRepository.UserRoles.Where(x => x.UserId == request.userId).Select(x=>x.RoleId).ToList();
            if (roleIds.Contains((int)UserRoleEnum.Admin))
            {
                return new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.BlockAdmin,
                    Result = new ResponseDefault()
                    {
                        Data = "How dare you?"
                    }
                };
            }
            user.IsBlock = !user.IsBlock;
            int result =  await _userRepository.UnitOfWork.SaveAsync();
            if(result == 0)
            {
                return new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.ExcuteDB,
                    Result = new ResponseDefault()
                    {
                        Data = "Excute Db error"
                    }
                };
            }
            return new Response<ResponseDefault>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new ResponseDefault()
                {
                    Data = user.Id
                }
            };
        }
    }
}
