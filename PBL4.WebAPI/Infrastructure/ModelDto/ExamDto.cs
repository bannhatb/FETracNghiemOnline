﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Infrastructure.ModelDto
{
    public class ExamDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Time { get; set; }
        public int LevelId { get; set; }
        public bool IsPublic { get; set; }
        public int QuestionCount { get; set; }
        public HashSet<int> Categories { get; set; }
    }
}
