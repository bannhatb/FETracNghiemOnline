using MediatR;
using PBL4.WebAPI.Infrastructure.ModelDto;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.QuestionCommands
{
    public class AddQuestionCommand : IRequest<Response<ResponseDefault>>
    {
        public QuestionDto Question { get; set; }
        public List<AnswerDto> Answers { get; set; } 
    }
}
