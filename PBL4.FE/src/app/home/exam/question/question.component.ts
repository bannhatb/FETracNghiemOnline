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
    // this.GetListQuestionOfExam(this.urlQuery.keyword);
    this.GetListQuestionOfUser();
  }
  // ChangePageHandler(page : number){
  //   this.urlQuery.pageNumber = page;
  //   this.GetListQuestionOfExam(this.urlQuery.keyword);
  // }
  GetListQuestionOfUser(){
    // this.activeRoute.params.subscribe((id)=>{
    //   this.examId = id.id;
    // })
    // this.urlQuery.keyword = text;
    this.questionService.GetListQuestionOfUser().subscribe((res)=>{
      // this.ListQuestion = res.result?.items;
      // if(this.ListQuestion != undefined){
      //   this.total = res.result?.total;
      //   this.TotalPage = Math.ceil(this.total/this.urlQuery.pageSize);
      // }
      this.ListQuestion = res.result?.data;
      console.log(this.ListQuestion);
    }, (err)=>{
      console.log(this.ListQuestion);

      console.log(err.error.message);
    })
  }
}


