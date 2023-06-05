using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class ExamCategory : Entity
    {
        public int CategoryId { get; set; }
        public int ExamId { get; set; }
    }
}
