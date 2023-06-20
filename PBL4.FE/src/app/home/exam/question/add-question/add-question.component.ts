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
        levelID : [0],
        categories : this.fb.array([3]),
      }),
      answers: this.fb.array([
        this.fb.group({
          answerContent: [''],
          rightAnswer: [false],
        }),
        // this.fb.group({
        //   answer: [''],
        //   rightAnswer: [false],
        // })
      ])
    })
    // console.log(this.formAddQuestion.get('answers')?.value);
    
  }
  get answers(): FormArray {
    return this.formAddQuestion.get('answers') as FormArray;
  }
  // createAnswerNull(){

  // }
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
      answers: this.formAddQuestion.value.answers
    };

    this.questionService.AddNewQuestion(requestModel).subscribe(
      (res) => {
        console.log(requestModel);
      },
      (err) => {
        console.log(requestModel);

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

}
