using FluentValidation;
using PBL4.WebAPI.Application.Commands.TestCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.TestValidators
{
    public class ChooseAnswserCommandValidator : AbstractValidator<ChooseAnswerCommand>
    { 
        public ChooseAnswserCommandValidator()
        {
            RuleFor(x => x.TestQuestionId).GreaterThan(0).WithErrorCode(ErrorCode.InvalidData);
        }
    }
}
