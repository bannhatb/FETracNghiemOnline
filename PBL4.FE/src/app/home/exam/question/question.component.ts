import { Component, OnInit } from '@angular/core';
import { QuestionFullModel } from 'src/app/shared/entities/question.module';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  id: string;
  questionDetail : QuestionFullModel;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
  }

}
