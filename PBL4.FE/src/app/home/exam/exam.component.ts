import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlQuery } from 'src/app/shared/Models/UrlQuery';
import { ExamService } from 'src/app/shared/services/exam.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  urlQuery = new UrlQuery();
  ListExam : any;
  Total : any =0;
  TotalPage : number;
  constructor(private examService : ExamService, private notificationService: NotificationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/page').then(() => {
      window.location.reload();
    });
    this.GetListExamCreateCurrentUser(this.urlQuery.keyword);
  }
  ChangePageHandler(page : number){
    this.urlQuery.pageNumber = page;
    this.GetListExamCreateCurrentUser(this.urlQuery.keyword);
  }
  GetListExamCreateCurrentUser(text : string){
    this.urlQuery.keyword = text;
    this.examService.GetListExamUser(this.urlQuery).subscribe((res)=>{
      this.ListExam = res.result?.items;
      console.log(this.ListExam);
      this.Total = res.result?.total;
      this.TotalPage = Math.ceil(this.Total/this.urlQuery.pageSize);
    }, err => {
      console.log(err);
    }, ()=>{

    })
  }
  deleteExam(id : number){
    this.examService.DeleteExam(id).subscribe((res)=>{
      console.log(res)
      this.notificationService.success("Đã xóa bài thi");
      location.reload();
    }, (err)=>{
      console.log(err);
    });
  }
}
