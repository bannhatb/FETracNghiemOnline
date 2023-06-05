import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {
  formCreateTest : FormGroup;
  examId : number;
  constructor(private testService: TestService,
    private activeRoute: ActivatedRoute,
    private fb : FormBuilder,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.formCreateTest = this.fb.group({
      questionCount : [''],
      time: [''],
      hideAnswer : false,
      shuffleQuestion : false,
      password : [''],
      startAt : [''],
      endAt : ['']
    });
  }
  submit(){
    if(this.formCreateTest.value.questionCount ==0){
      this.notificationService.error('Không có câu hỏi');
      return;
    }
    this.activeRoute.params.subscribe((id)=>{
      this.examId = id.id;
    })
    let requestModel= {
      questionCount : this.formCreateTest.value.questionCount,
      time: this.formCreateTest.value.time,
      hideAnswer : this.formCreateTest.value.hideAnswer,
      shuffleQuestion : this.formCreateTest.value.shuffleQuestion,
      password : this.formCreateTest.value.password,
      startAt : this.formCreateTest.value.startAt,
      endAt : this.formCreateTest.value.endAt,
      examId : this.examId
    }
    this.testService.CreateTest(requestModel).subscribe((res)=>{
      if(res.result?.data == "01000100"){
        this.notificationService.info("số lượng câu hỏi vượt quá số câu hỏi của đề thi");
      }
      if(res.message== "00000000"){
        this.notificationService.success("tạo đề thi thành công");
      }
    }, (err)=>{
      console.log(err.error.message);
    })
  }

}
