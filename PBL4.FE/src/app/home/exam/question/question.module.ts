import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "src/app/shared/shared.module";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { QuestionRoutingModule } from "./question-routing.module";

@NgModule({
  declarations: [
    AddQuestionComponent,
    QuestionDetailComponent
  ],
  imports: [
    QuestionRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    ],
  exports: [],
})
export class QuestionModule {

}
