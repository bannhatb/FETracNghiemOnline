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
  test: any;
  constructor(private testService: TestService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.formCreateTest = this.fb.group({
      hideAnswer : false,
      shuffleQuestion : false,
      // password : ['123456'],
      // startAt : ['2023-06-31T03:34:00'],
      // endAt : ['2024-08-31T03:34:00']
    });

  }
  async submit(){
    try {
      if(this.formCreateTest.value.questionCount ==0){
        this.notificationService.error('Không có câu hỏi');
        return;
      }
      this.activeRoute.params.subscribe((id)=>{
        this.examId = id.id;
      })
      // let requestModel= {
      //   hideAnswer : this.formCreateTest.value.hideAnswer,
      //   shuffleQuestion : this.formCreateTest.value.shuffleQuestion,
      //   password : this.formCreateTest.value.password,
      //   startAt : this.formCreateTest.value.startAt,
      //   endAt : this.formCreateTest.value.endAt,
      //   examId : this.examId
      // }
      let requestModel= {
        hideAnswer : this.formCreateTest.value.hideAnswer,
        shuffleQuestion : this.formCreateTest.value.shuffleQuestion,
        password : "123456",
        startAt : "2023-09-26T03:29:29.921Z",
        endAt : "2024-06-26T03:29:29.921Z",
        examId : this.examId
      }
      const res = await this.testService.CreateTest(requestModel).toPromise();
      if(res.message== "00000000"){
        this.notificationService.success("tạo đề thi thành công");
      }
      this.testId = res.result?.data.id;
      console.log(this.testId);
      console.log(res.result?.data)
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  async dotest() {
    const res = await this.testService.GetTestUser(this.testId,1).toPromise();
      // console.log(res.result.data.testId);
    this.test = res;
    console.log(this.test.result.data.testId);
    this.router.navigateByUrl(`/test/user-test/${this.test.result.data.testId}`);

  }
  async createTestAndDoTest() {
    await this.submit();
    // setTimeout(() =>{

    // },1000)
    this.dotest();
  }
}