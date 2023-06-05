using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class TestQuestionResult : Entity // to support Multichoice Question
    {
        public int TestQuestionId { get; set; }
        public int Choose { get; set; } // AnswerId
    }
}
