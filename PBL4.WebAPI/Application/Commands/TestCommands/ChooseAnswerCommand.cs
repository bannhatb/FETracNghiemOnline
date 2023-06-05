using MediatR;
using PBL4.WebAPI.Infrastructure.ModelDto;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.TestCommands
{
    public class ChooseAnswerCommand : IRequest<Response<ResponseDefault>>
    {
        public int TestQuestionId { get; set; }
        public List<int> AnswerIds { get; set; }
    }
}
