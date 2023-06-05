using MediatR;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.QuestionCommands
{
    public class AddQuestionExamCommand : IRequest<Response<ResponseDefault>>
    {
        public int ExamId { get; set; }
        public List<int> QuestionIds { get; set; }
    }
    //public record QuestionInExam
    //{
    //    public int QuestionId { get; set; }
    //    //public int Point { get; set; }
    //}
}
