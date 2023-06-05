using FluentValidation;
using PBL4.WebAPI.Application.Commands.QuestionCommands;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.QuestionValidators
{
    public class AddQuestionExamCommandValidator : AbstractValidator<AddQuestionExamCommand>
    {
        public AddQuestionExamCommandValidator()
        {
            RuleFor(x => x.QuestionIds).NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty)
                .WithMessage("QuestionId is empty !!!");
            RuleFor(x => x.ExamId).NotEmpty()
                .WithErrorCode(ErrorCode.NotEmpty)
                .WithMessage("ExamId is empty !!!");
        }
    }
}
