using FluentValidation;
using PBL4.WebAPI.Application.Commands.ExamCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.ExamValidators
{
    public class AddExamCommandValidator : AbstractValidator<AddExamCommand>
    {
        public AddExamCommandValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty)
                .WithMessage("Exam Title is empty !!!");
            RuleFor(x => x.Title)
                .MaximumLength(255)
                .WithErrorCode(ErrorCode.OverLengthData)
                .WithMessage("Exam Title is over length !!!");
        }
    }
}
