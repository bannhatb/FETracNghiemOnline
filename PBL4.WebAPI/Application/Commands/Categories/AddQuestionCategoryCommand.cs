using MediatR;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.Categories
{
    public class AddQuestionCategoryCommand : IRequest<Response<ResponseDefault>>
    {
        public int QuestionId { get; set; }
        public HashSet<int> Categories { get; set; }
    }
}
