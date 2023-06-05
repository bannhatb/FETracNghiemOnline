using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class TestQuestion : Entity
    {
        public int QuestionId { get; set; }
        public int UserId { get; set; } // who is doing
        public int TestId { get; set; }
        public int NumericalOrder { get; set; }
    }
}
