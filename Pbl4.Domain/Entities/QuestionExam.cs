using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class QuestionExam : Entity
    {
        public int QuestionId { get; set; }
        public int ExamId { get; set; }
    }
}
