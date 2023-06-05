import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  formQuestion : FormGroup;
  constructor(private questionService: QuestionService,
    private fb : FormBuilder) { }
    formAddQuestion : FormGroup;
  ngOnInit(): void {
    this.formAddQuestion = this.fb.group({
      questionContent : [''],
      questionType: false,
      answer:['']
    })
  }


}
