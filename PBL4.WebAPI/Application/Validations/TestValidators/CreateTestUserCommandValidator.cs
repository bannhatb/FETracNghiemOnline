using FluentValidation;
using PBL4.WebAPI.Application.Commands.TestCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.TestValidators
{
    public class CreateTestUserCommandValidator : AbstractValidator<CreateTestUserCommand>
    {
        public CreateTestUserCommandValidator()
        {
            RuleFor(x => x.TestId).GreaterThanOrEqualTo(1)
                .WithMessage("Test id must large than 0").WithErrorCode(ErrorCode.InvalidData);
        }
    }
}
