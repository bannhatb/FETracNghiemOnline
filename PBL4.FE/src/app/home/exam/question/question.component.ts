import { Component, OnInit } from '@angular/core';
import { UrlQuery } from 'src/app/shared/Models/UrlQuery';
import { QuestionFullModel } from 'src/app/shared/entities/question.module';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  id: string;
  ListQuestion: any;
  total : any = 1;
  // urlQuery = new UrlQuery();
  // TotalPage : number;
  // activeRoute: any;
  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.GetListQuestionOfUser();
  }

  GetListQuestionOfUser(){
    this.questionService.GetListQuestionOfUser().subscribe(
      (res)=>{
      this.ListQuestion = res;
      console.log(this.ListQuestion);
    }, (err)=>{
      // console.log(this.ListQuestion);
      console.log(err);
    })
  }
}


