using FluentValidation;
using PBL4.WebAPI.Application.Commands.ExamCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.ExamValidators
{
    public class UpdateExamCommandValidator : AbstractValidator<UpdateExamCommand>
    {
        public UpdateExamCommandValidator()
        {
            RuleFor(x => x.Exam.Title)
                .NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty)
                .WithMessage("Exam Title is empty !!!");
            RuleFor(x => x.Exam.Title)
                .MaximumLength(255)
                .WithErrorCode(ErrorCode.OverLengthData)
                .WithMessage("Exam Title is over length !!!");
            RuleFor(x => x.Exam.QuestionCount).GreaterThanOrEqualTo(1)
                .WithErrorCode(ErrorCode.GreaterThanZero)
                .WithMessage("Exam Title is over length !!!");
        }
    }
}
