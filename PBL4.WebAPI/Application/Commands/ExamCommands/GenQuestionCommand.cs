using MediatR;
using PBL4.WebAPI.Infrastructure.ModelDto;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.ExamCommands
{
    public class GenQuestionCommand : IRequest<Response<ResponseDefault>>
    {
        public string FileUp { get; set; }
        public string SplitNumberAndContent { get; set; }
        public string rightMark { get; set; }
        public int examId { get; set; }
    }
}
