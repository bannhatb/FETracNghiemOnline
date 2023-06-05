using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class Answer : Entity
    {
        public string AnswerContent { get; set; }
        public int QuestionId { get; set; }
        public bool RightAnswer { get; set; }
    }
}
