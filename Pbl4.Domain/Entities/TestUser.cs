using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class TestUser : Entity
    {
        public int UserId { get; set; }
        public int TestId { get; set; }
        public double Point { get; set; }
        public int Status { get; set; }
        public int TimeRemain { get; set; }
    }
}
