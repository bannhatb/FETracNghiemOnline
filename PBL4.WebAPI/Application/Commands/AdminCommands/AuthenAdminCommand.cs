using MediatR;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.AdminCommands
{
    public class AuthenAdminCommand : IRequest<Response<ResponseDefault>>
    {
        public int UserId { get; set; }
    }
}
