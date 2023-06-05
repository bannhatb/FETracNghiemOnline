using MediatR;
using PBL4.WebAPI.Infrastructure.ModelDto;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.ExamCommands
{
    public class UpdateExamCommand : IRequest<Response<ResponseDefault>>
    {
        public ExamDto Exam { get; set; }
    }
}
