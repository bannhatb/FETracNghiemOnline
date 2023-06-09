﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Infrastructure.ModelQueries
{
    public class ExamDetailQueryModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Time { get; set; }
        public string CreateBy { get; set; }
        public int QuestionCount { get; set; }
        public int? LevelId { get; set; }
        public bool IsPublic { get; set; }
        public List<CategoryQueryModel> ListCategories { get; set; }
        public LevelQueryModel Level { get; set; }
    }
    public class LevelQueryModel
    {
        public string NameLevel { get; set; }
    }

    public class ExamQueryModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Time { get; set; }
        public string CreateBy { get; set; }
        public int QuestionCount { get; set; }
        public int? LevelId { get; set; }
        public bool IsPublic { get; set; }
    }
    
}
