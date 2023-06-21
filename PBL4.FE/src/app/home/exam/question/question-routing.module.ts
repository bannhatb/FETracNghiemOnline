import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { AuthenTeacherGuard } from "src/app/shared/services/authenteacher.guard";
import { UpdateQuestionComponent } from "./update-question/update-question.component";

const router : Routes =[
  {
    path: '',
    children: [
      {
        path: 'question-detail',
        component: QuestionDetailComponent,
        canActivate: [AuthenTeacherGuard],
        data: {
          expectedRole: 'Teacher'
        }
      },
      {
        path: 'add-question',
        component: AddQuestionComponent,
        canActivate: [AuthenTeacherGuard],
        data: {
          expectedRole: 'Teacher'
        }
      },
      {
        path: 'update-question/:id',
        component: UpdateQuestionComponent,
        canActivate: [AuthenTeacherGuard],
        data: {
          expectedRole: 'Teacher'
        }
      },
      // {
      //   path: 'question-detail',
      //   component: QuestionComponent
      // }
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
