import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  formQuestion : FormGroup;
  listCategory : any;
  listCategoryChoose = new Array<number>();
  listCateDisplay = new Array<string>();
  constructor(private questionService: QuestionService,
    private fb : FormBuilder) { }
    formAddQuestion : FormGroup;
  ngOnInit(): void {
    this.formAddQuestion = this.fb.group({
        question : this.fb.group({
        questionContent: [''],
        explaint: [''],
        Categories: ['']
      }),
      answers: this.fb.array([
          this.fb.group({
          answerContent: [''],
          rightAnswer: [false],
        }),
      ])
    });

    this.GetAllLevel();

  }
  get answers(): FormArray {
    return this.formAddQuestion.get('answers') as FormArray;
  }

  inputs: string[] = [];

  addInput(): void {
    this.answers.push(this.fb.group({
      answerContent: [''],
      rightAnswer: [false]
    }));
  }
  addQuestion(): void {
    const requestModel = {
      question: this.formAddQuestion.value.question,
      answers: this.formAddQuestion.value.answers,
      categories: this.listCategoryChoose
    };

    this.questionService.AddNewQuestion(requestModel).subscribe(
      (res) => {
        console.log(requestModel);
      },
      (err) => {
        console.log(err);
      }
    );
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


  GetAllLevel() {
    console.log("get all level")
    this.questionService.GetLevel().subscribe((res)=>{
      this.listCategory = res;
      console.log(this.listCategory);
    }, (err)=>{
      console.log(err);
    })
  }
}
