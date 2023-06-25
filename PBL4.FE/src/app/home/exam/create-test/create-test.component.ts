import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {
  formCreateTest : FormGroup;
  examId: number;
  testId: number;
  constructor(private testService: TestService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.formCreateTest = this.fb.group({
      hideAnswer : false,
      shuffleQuestion : false,
      password : [' '],
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
      hideAnswer : this.formCreateTest.value.hideAnswer,
      shuffleQuestion : this.formCreateTest.value.shuffleQuestion,
      password : this.formCreateTest.value.password,
      startAt : this.formCreateTest.value.startAt,
      endAt : this.formCreateTest.value.endAt,
      examId : this.examId
    }
    this.testService.CreateTest(requestModel).subscribe((res)=>{
      if(res.message== "00000000"){
        this.notificationService.success("tạo đề thi thành công");
      }
      this.testId = res.result?.data.id;
      console.log(this.testId);
      console.log(res.result?.data)
    }, (err)=>{
      console.log(err.error.message);
    })
  }

  dotest() {
    this.router.navigateByUrl(`/test/user-test/${this.testId}`);
  }

}
