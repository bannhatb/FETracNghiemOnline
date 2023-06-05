using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class Question : Entity
    {
        public string QuestionContent { get; set; }
        public string Explaint { get; set; }
        public int TypeId { get; set; }
        public int RightCount { get; set; }
    }
}
