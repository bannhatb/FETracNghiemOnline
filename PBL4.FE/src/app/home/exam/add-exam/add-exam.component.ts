import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/shared/services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {
  formAddExam : FormGroup;
  constructor(private examService: ExamService, private fb: FormBuilder,
    private router: Router) { }
  listCategory : any;
  listCategoryChoose = new Array<number>();
  listCateDisplay = new Array<string>();
  ngOnInit(): void {
    this.formAddExam = this.fb.group({
      Title : [''],
      Time : [''],
      RandomQuestion : [false],
      QuestionCount : [0],
      QuestionCountLevel1 : [0],
      QuestionCountLevel2 : [0],
      QuestionCountLevel3 : [0],
      QuestionCountLevel4 : [0],
      QuestionCountLevel5 : [0],
      IsPublic: [false],
      Categories: ['']
    });
    // this.GetAllCategory();
  }
  newCategory(event: any){
    let value = event.target.value as number;
    if(this.listCategoryChoose.indexOf(value) !==-1){
      let index = this.listCategoryChoose.indexOf(value);
      this.listCategoryChoose.splice(index,1);
      //this.listCateDisplay.splice(index,1);
    }
    else{
      this.listCategoryChoose.push(value);
      //this.listCateDisplay.push(this.GetNameCate(value).categoryName);
    }
    console.log(this.listCategoryChoose);
    //console.log(this.listCateDisplay);
  }
  GetNameCate(id : number) {
    // return this.listCategory.forEach((e: any) => {
    //   return e.id === id
    // });
  }
  CreateExam(){
    const requestModel = {
      title: this.formAddExam.value.Title,
      time: this.formAddExam.value.Time,
      isPublic: this.formAddExam.value.IsPublic,
      randomQuestion: this.formAddExam.value.RandomQuestion,
      questionCount : this.formAddExam.value.QuestionCount,
      questionCountLevel1 : this.formAddExam.value.QuestionCountLevel1,
      questionCountLevel3 : this.formAddExam.value.QuestionCountLevel3,
      questionCountLevel2 : this.formAddExam.value.QuestionCountLevel2,
      questionCountLevel4 : this.formAddExam.value.QuestionCountLevel4,
      questionCountLevel5 : this.formAddExam.value.QuestionCountLevel5,
      categories: this.listCategoryChoose
    };
    this.examService.CreateExam(requestModel).subscribe((res)=>{
      console.log(requestModel);
      console.log(res);
    }, (err)=>{
      console.log(err);
    });
    this.router.navigateByUrl(`/exam`);

  }
  // GetAllCategory(){
  //   this.examService.GetCategory().subscribe((res)=>{
  //     this.listCategory = res;
  //     console.log(this.listCategory);
  //   }, (err)=>{
  //     console.log(err.error.message);
  //   })
  // }

}
