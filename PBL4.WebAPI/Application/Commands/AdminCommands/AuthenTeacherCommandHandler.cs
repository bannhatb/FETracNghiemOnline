﻿using MediatR;
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
    public class AuthenTeacherCommandHandler : IRequestHandler<AuthenTeacherCommand, Response<ResponseDefault>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IIdentityServices _identityServices;
        public AuthenTeacherCommandHandler(IUserRepository userRepository,
            IIdentityServices identityServices)
        {
            _userRepository = userRepository;
            _identityServices = identityServices;
        }
        public async Task<Response<ResponseDefault>> Handle(AuthenTeacherCommand request, CancellationToken cancellationToken)
        {
            User user = _userRepository.Users.FirstOrDefault(x => x.Id == request.UserId);
            if(user == null)
            {
                return new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.NotFound,
                    Result = new ResponseDefault()
                    {
                        Data = "user khong ton tai"
                    }
                };
            }
            UserRole exist = _userRepository.UserRoles.FirstOrDefault(x => x.UserId == request.UserId && x.RoleId == (int)UserRoleEnum.Teacher);
            if (exist != null)
            {
                _userRepository.Delete(exist);
                await _userRepository.UnitOfWork.SaveAsync();
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
            UserRole userRole = new UserRole()
            {
                RoleId = (int)UserRoleEnum.Teacher,
                UserId = request.UserId
            };
            _userRepository.Add(userRole);
            int result = await _userRepository.UnitOfWork.SaveAsync();
            if (result == 0)
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
