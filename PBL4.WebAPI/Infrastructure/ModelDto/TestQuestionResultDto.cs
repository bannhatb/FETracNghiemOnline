using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Infrastructure.ModelDto
{
    public class TestQuestionResultDto
    {
        public int TestQuestionId { get; set; }
        public List<int> AnswerIds { get; set; }
    }
}
