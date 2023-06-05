using MediatR;
using PBL4.WebAPI.Infrastructure.ModelDto;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.ExamCommands
{
    public class AddExamCommand : IRequest<Response<ResponseDefault>>
    {
        public int? Id { get; set; }
        public string Title { get; set; }
        public int Time { get; set; } = 0;
        public int LevelId { get; set; } = 0;
        public bool IsPublic { get; set; }
        public int QuestionCount { get; set; } = 0;
        public HashSet<int> Categories { get; set; }
    }
}
