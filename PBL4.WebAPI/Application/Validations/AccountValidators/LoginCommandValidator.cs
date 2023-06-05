using FluentValidation;
using PBL4.WebAPI.Application.Commands.AccountCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.AccountValidators
{
    public class LoginCommandValidator : AbstractValidator<LoginCommand>
    {
        public LoginCommandValidator()
        {
            RuleFor(x => x.UserName).NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty).WithMessage("UserName is Empty");
            RuleFor(x => x.Password).NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty).WithMessage("Password is Empty");
        }
    }
}
