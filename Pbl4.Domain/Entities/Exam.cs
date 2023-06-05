using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class Exam : Entity
    {
        public string Title { get; set; }
        public int Time { get; set; }
        public string CreateBy { get; set; }
        public int QuestionCount { get; set; }
        public int? LevelId { get; set; }
        public bool IsPublic { get; set; }
    }
}
