import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { QuestionService } from 'src/app/shared/services/question.service';


@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.scss']
})
export class AllQuestionComponent implements OnInit {
  listQuestion : any;
  Total: any;

  constructor(private adminService: AdminService,
    private questionService: QuestionService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAllQuestion();
  }
  getAllQuestion(): void {
    this.adminService.GetAllQuestion().subscribe((res)=>{
      this.listQuestion = res;
      this.Total =this.listQuestion.result.total;
      console.log(this.listQuestion);
      console.log(this.Total);
      
      
    },(err)=>{
      console.log(err);
      
    })
  }
  deleteQuestion(id:any){
    this.questionService.DeleteQuestion(id).subscribe((res)=>
    {
      console.log('Da Xoa ' + id);
      window.confirm('Are you sure you want to delete');
      location.reload();
    },(err)=>{
      console.log(err.message);
      
    })
  }
}
