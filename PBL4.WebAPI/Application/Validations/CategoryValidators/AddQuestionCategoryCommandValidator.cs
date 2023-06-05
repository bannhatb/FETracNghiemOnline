using FluentValidation;
using PBL4.WebAPI.Application.Commands.Categories;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations.CategoryValidators
{
    public class AddQuestionCategoryCommandValidator : AbstractValidator<AddQuestionCategoryCommand>
    {
        public AddQuestionCategoryCommandValidator()
        {
            RuleFor(x => x.Categories.Count).GreaterThan(0).WithErrorCode(ErrorCode.NullList).WithMessage("Categories is null");
            RuleFor(x => x.QuestionId).GreaterThan(0).WithErrorCode(ErrorCode.InvalidData).WithMessage("Question Id is invalid");
            RuleForEach(x => x.Categories).GreaterThanOrEqualTo(0)
                .WithErrorCode(ErrorCode.InvalidData).WithMessage("Category Id is negative");
        }
    }
}
