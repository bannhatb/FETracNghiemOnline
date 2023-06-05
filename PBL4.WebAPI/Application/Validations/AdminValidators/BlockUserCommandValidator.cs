using FluentValidation;
using PBL4.WebAPI.Application.Commands.AdminCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.AdminValidators
{
    public class BlockUserCommandValidator : AbstractValidator<BlockUserCommand>
    {
        public BlockUserCommandValidator()
        {
            RuleFor(x => x.userId).GreaterThan(0)
                .WithErrorCode(ErrorCode.InvalidData);
        }
    }
}
