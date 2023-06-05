using FluentValidation;
using PBL4.WebAPI.Application.Commands.Categories;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Validations
{
    public class AddCategoryCommandValidator : AbstractValidator<AddCategoryCommand>
    {
        public AddCategoryCommandValidator()
        {
            RuleFor(x => x.CategoryName.Trim()).NotEmpty().WithMessage("Category Name is null")
                .WithErrorCode(ErrorCode.NotEmpty);
        }
    }
}
