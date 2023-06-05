import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { QuestionComponent } from "./question.component";

const router : Routes =[
  {
    path: '',
    children: [
      {
        path: 'question-detail/:id',
        component: QuestionDetailComponent,
      },
      {
        path: 'add-question/:testId',
        component: AddQuestionComponent,
      },
      {
        path: '',
        component: QuestionComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'question',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})

export class QuestionRoutingModule {}
