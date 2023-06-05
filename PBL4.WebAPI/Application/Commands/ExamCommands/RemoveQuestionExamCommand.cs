using MediatR;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.ExamCommands
{
    public class RemoveQuestionExamCommand : IRequest<Response<ResponseDefault>>
    {
        public int ExamId { get; set; }
        public int QuestionId { get; set; }
    }
}
