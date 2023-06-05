using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Infrastructure.ModelQueries
{
    public class QuestionQueryModel
    {
        public int Id { get; set; }
        public string QuestionContent { get; set; }
        public string Explaint { get; set; }
        public int TypeId { get; set; }
        public int RightCount { get; set; }
        public List<AnswerQueryModel> ListAnswers { get; set; }
    }
}
