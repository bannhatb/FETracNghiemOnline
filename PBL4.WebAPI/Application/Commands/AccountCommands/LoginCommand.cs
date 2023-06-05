using MediatR;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.AccountCommands
{
    public class LoginCommand : IRequest<Response<ResponseToken>>
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
