using FluentValidation;
using PBL4.WebAPI.Application.Commands.TestCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.TestValidators
{
    public class AddTestCommandValidator : AbstractValidator<AddTestCommand>
    {
        public AddTestCommandValidator()
        {
            RuleFor(x => x.ExamId)
                .NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty)
                .WithMessage("Exam Id is empty !!!");
            RuleFor(x => x.StartAt).LessThanOrEqualTo(x=>x.EndAt)
                .WithErrorCode(ErrorCode.InvalidData)
                .WithMessage("Start date must less than end date !!!");
        }
    }
}
