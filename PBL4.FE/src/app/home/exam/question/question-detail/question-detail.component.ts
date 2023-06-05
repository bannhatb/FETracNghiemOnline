import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionFullModel } from 'src/app/shared/entities/question.module';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  id : string;
  questionDetail : QuestionFullModel
  constructor(
    private questionService: QuestionService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || '{}';
    var result : any;
    this.questionService.GetQuestionDetail(this.id).subscribe({
      next: (response)=> {
        console.log(response);
        if(response.status ===true){
          this.questionDetail = response.result!;
          console.log(this.questionDetail);
        }
      }
    })
  }

}
