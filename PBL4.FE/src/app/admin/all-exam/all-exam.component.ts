import { Component, OnInit } from '@angular/core';
import { UrlQuery } from 'src/app/shared/Models/UrlQuery';
import { AdminService } from 'src/app/shared/services/admin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-all-exam',
  templateUrl: './all-exam.component.html',
  styleUrls: ['./all-exam.component.scss']
})
export class AllExamComponent implements OnInit {
  urlQuery = new UrlQuery();
  ListExam : any;
  Total : any =0;
  TotalPage : number;
  constructor(private adminService: AdminService,
    private notificationService: NotificationService) { }

    ngOnInit(): void {
      this.GetAllExamAdmin(this.urlQuery.keyword);
    }
    ChangePageHandler(page : number){
      this.urlQuery.pageNumber = page;
      this.GetAllExamAdmin(this.urlQuery.keyword);
    }
    GetAllExamAdmin(text : string){
      this.urlQuery.keyword = text;
      this.adminService.GetAllExam(this.urlQuery).subscribe((res)=>{
        this.ListExam = res;
        console.log(this.ListExam);
        this.Total = this.ListExam.result?.total;
        this.TotalPage = Math.ceil(this.Total/this.urlQuery.pageSize);
      }, err => {
        console.log(err);
      }, ()=>{

      })
    }
  deleteExam(id : number){
    this.adminService.DeleteExamAdmin(id).subscribe((res)=>{
      console.log(res)
      this.notificationService.success("Đã xóa bài thi");
      location.reload();
    }, (err)=>{
      console.log(err);
    });
  }

}
