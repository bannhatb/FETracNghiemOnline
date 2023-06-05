using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class QuestionCategory : Entity
    {
        public int QuestionId { get; set; }
        public int CategoryId { get; set; }
    }
}
