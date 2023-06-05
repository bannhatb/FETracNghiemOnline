"use strict";(self.webpackChunkUI=self.webpackChunkUI||[]).push([[596],{8596:(ct,T,s)=>{s.r(T),s.d(T,{ExamModule:()=>lt});var C=s(8338),l=s(3611),p=s(5152),t=s(865),m=s(5263),u=s(9010),g=s(7855),c=s(6019),d=s(1244);function b(n,a){if(1&n&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.categoryName)}}const E=function(){return["/exam/"]};let q=(()=>{class n{constructor(e,i,o){this.examService=e,this.fb=i,this.router=o,this.listCategoryChoose=new Array,this.listCateDisplay=new Array}ngOnInit(){this.formAddExam=this.fb.group({Title:[""],Time:[""],LevelId:[""],IsPublic:[!1],Categories:[""]}),this.GetAllCategory()}newCategory(e){let i=e.target.value;if(-1!==this.listCategoryChoose.indexOf(i)){let o=this.listCategoryChoose.indexOf(i);this.listCategoryChoose.splice(o,1)}else this.listCategoryChoose.push(i);console.log(this.listCategoryChoose)}GetNameCate(e){}CreateExam(){this.examService.CreateExam({Title:this.formAddExam.value.Title,Time:this.formAddExam.value.Time,LevelId:this.formAddExam.value.LevelId,QuestionCount:0,IsPublic:this.formAddExam.value.IsPublic,Categories:this.listCategoryChoose}).subscribe(i=>{},i=>{console.log(i)}),this.router.navigateByUrl("/exam")}GetAllCategory(){this.examService.GetCategory().subscribe(e=>{this.listCategory=e,console.log(this.listCategory)},e=>{console.log(e.error.message)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.O),t.Y36(u.qu),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-exam"]],decls:37,vars:4,consts:[[1,"total"],[3,"formGroup"],[1,"form-group"],["type","text","value","","name","Title","formControlName","Title",2,"width","300px"],["type","number","value","","name","Time","formControlName","Time","min","0","max","4320"],["for","LevelId",2,"margin-right","5px"],["name","LevelId","formControlName","LevelId"],["value","1"],["value","2"],["value","3"],[2,"margin-right","5px"],["type","checkbox","name","IsPublic","formControlName","IsPublic","value","false"],["for",""],["name","Categories","formControlName","Categories",3,"change"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-outline-primary",2,"margin-bottom","10px",3,"click"],["type","submit","name","back",1,"btn","btn-outline-danger",3,"routerLink"],[3,"value"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"div",0),t.TgZ(2,"form",1),t.TgZ(3,"div",2),t.TgZ(4,"label"),t._uU(5,"Ti\xeau \u0111\u1ec1: "),t._UZ(6,"input",3),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"label"),t._uU(9,"Th\u1eddi gian l\xe0m b\xe0i (ph\xfat): "),t._UZ(10,"input",4),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"label",5),t._uU(13,"M\u1ee9c \u0111\u1ed9:"),t.qZA(),t.TgZ(14,"select",6),t.TgZ(15,"option",7),t._uU(16,"D\u1ec5"),t.qZA(),t.TgZ(17,"option",8),t._uU(18,"Trung b\xecnh"),t.qZA(),t.TgZ(19,"option",9),t._uU(20,"Kh\xf3"),t.qZA(),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"label",10),t._uU(23,"C\xf4ng khai: "),t.qZA(),t._UZ(24,"input",11),t._UZ(25,"br"),t.TgZ(26,"label",12),t._uU(27," Lo\u1ea1i \u0111\u1ec1 thi: "),t.TgZ(28,"select",13),t.NdJ("change",function(r){return i.newCategory(r)}),t.YNc(29,b,2,2,"option",14),t.qZA(),t.qZA(),t._UZ(30,"br"),t.TgZ(31,"button",15),t.NdJ("click",function(){return i.CreateExam()}),t._uU(32,"T\u1ea1o Exam"),t.qZA(),t._UZ(33,"br"),t.TgZ(34,"button",16),t._uU(35,"H\u1ee7y"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(36,"app-footer")),2&e&&(t.xp6(2),t.Q6J("formGroup",i.formAddExam),t.xp6(27),t.Q6J("ngForOf",i.listCategory.result.items),t.xp6(5),t.Q6J("routerLink",t.DdM(3,E)))},directives:[g.V,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,u.wV,u.qQ,u.Fd,u.EJ,u.YN,u.Kr,u.Wl,c.sg,l.rH,d.c],styles:["form[_ngcontent-%COMP%]{width:80%;margin:0 auto}.total[_ngcontent-%COMP%]{width:600px;padding:30px;margin:30px auto 0;border:2px solid red;box-shadow:13px 15px 1px 1px #ccbfbfbf;-webkit-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);-moz-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);border-radius:4px;background-color:bisque;font-weight:700}"]}),n})();var _=s(4085),x=s(1931),h=s(5391),Z=s(2113);function y(n,a){if(1&n&&(t.TgZ(0,"option",11),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.name)}}function U(n,a){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.userId),t.xp6(2),t.Oqu(e.userName),t.xp6(2),t.Oqu(e.point),t.xp6(2),t.Oqu(e.className)}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-paging",12),t.NdJ("changePage",function(o){return t.CHM(e),t.oxw().ChangePageHandler(o)}),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("totalPage",e.TotalPage)("currentPage",e.urlQuery.pageNumber)}}const w=function(){return["/exam/test-create/"]};let O=(()=>{class n{constructor(e,i){this.testService=e,this.activeRoute=i,this.urlQuery=new _.e,this.testId=0,this.classId=-1,this.Total=0}ngOnInit(){this.GetAllClass(),this.GetTestAnalysisResult(this.urlQuery.keyword)}ChangeClass(e){this.GetTestAnalysisResult(this.urlQuery.keyword)}GetAllClass(){this.testService.GetAllClass().subscribe(e=>{var i;this.classData=null===(i=e.result)||void 0===i?void 0:i.data,console.log(this.classData)},e=>{console.log(e.error.message)})}ChangePageHandler(e){this.urlQuery.pageNumber=e,this.GetTestAnalysisResult(this.urlQuery.keyword)}GetTestAnalysisResult(e){this.activeRoute.params.subscribe(i=>{this.testId=i.id}),this.urlQuery.keyword=e,this.testService.AnalysisTestResult(this.testId,this.urlQuery,this.classId).subscribe(i=>{var o,r;this.data=null===(o=i.result)||void 0===o?void 0:o.data,console.log(this.data),this.Total=null===(r=i.result)||void 0===r?void 0:r.data.total,this.TotalPage=Math.ceil(this.Total/this.urlQuery.pageSize)},i=>{console.log(i.error.message)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.q),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-analysis-result"]],decls:30,vars:8,consts:[[1,"main"],[3,"textSearch","search"],["for",""],[3,"ngModel","ngModelChange"],["selectClass",""],["value","-1"],[3,"value",4,"ngFor","ngForOf"],[1,"table-bordered","table-hover"],[4,"ngFor","ngForOf"],["type","submit","name","back",1,"btn","btn-danger",3,"routerLink"],[4,"ngIf"],[3,"value"],[3,"totalPage","currentPage","changePage"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"div",0),t.TgZ(2,"h3"),t._uU(3,"K\u1ebft qu\u1ea3 cu\u1ed9c thi"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"app-search",1),t.NdJ("search",function(r){return i.GetTestAnalysisResult(r)}),t.qZA(),t.TgZ(7,"label",2),t._uU(8," L\u1edbp: ... "),t.TgZ(9,"select",3,4),t.NdJ("ngModelChange",function(r){return i.classId=r})("ngModelChange",function(r){return i.ChangeClass(r)}),t.TgZ(11,"option",5),t._uU(12,"All"),t.qZA(),t.YNc(13,y,2,2,"option",6),t.qZA(),t.qZA(),t.TgZ(14,"table",7),t.TgZ(15,"thead"),t.TgZ(16,"td"),t._uU(17,"M\xe3 user"),t.qZA(),t.TgZ(18,"td"),t._uU(19,"UserName"),t.qZA(),t.TgZ(20,"td"),t._uU(21,"\u0110i\u1ec3m"),t.qZA(),t.TgZ(22,"td"),t._uU(23,"L\u1edbp"),t.qZA(),t.qZA(),t.YNc(24,U,9,4,"tr",8),t.qZA(),t._UZ(25,"br"),t.TgZ(26,"button",9),t._uU(27,"Back"),t.qZA(),t.YNc(28,Q,2,2,"div",10),t.qZA(),t._UZ(29,"app-footer")),2&e&&(t.xp6(5),t.hij("S\u1ed1 ng\u01b0\u1eddi l\xe0m: ",i.data.total,""),t.xp6(1),t.Q6J("textSearch",i.urlQuery.keyword),t.xp6(3),t.Q6J("ngModel",i.classId),t.xp6(4),t.Q6J("ngForOf",i.classData),t.xp6(11),t.Q6J("ngForOf",i.data.items.listResult),t.xp6(2),t.Q6J("routerLink",t.DdM(7,w)),t.xp6(2),t.Q6J("ngIf",i.TotalPage>1))},directives:[g.V,h.g,u.EJ,u.JJ,u.On,u.YN,u.Kr,c.sg,l.rH,c.O5,d.c,Z.L],styles:["table[_ngcontent-%COMP%]{font-weight:700;text-align:center;margin:auto}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-top:10px;width:100%;padding:10px 0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid black;text-align:center;margin-left:auto;margin-right:auto;padding:5px 25px;font-size:17px}a[_ngcontent-%COMP%]{font-style:revert;margin:8px -10px 11px -15px;padding:2px 19px;font-size:20px}thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid black;text-align:center;margin-left:auto;margin-right:auto;font-size:17px}.main[_ngcontent-%COMP%]{width:600px;padding:30px;margin:30px auto 0;border:2px solid red;box-shadow:13px 15px 1px 1px #ccbfbfbf;-webkit-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);-moz-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);border-radius:4px;background-color:#e6e7f1;font-weight:700}"]}),n})();var v=s(3456),A=s(5209);const k=function(){return["/exam/"]};let M=(()=>{class n{constructor(e,i,o,r){this.testService=e,this.activeRoute=i,this.fb=o,this.notificationService=r}ngOnInit(){this.formCreateTest=this.fb.group({questionCount:[""],time:[""],hideAnswer:!1,shuffleQuestion:!1,password:[""],startAt:[""],endAt:[""]})}submit(){this.activeRoute.params.subscribe(i=>{this.examId=i.id}),this.testService.CreateTest({questionCount:this.formCreateTest.value.questionCount,time:this.formCreateTest.value.time,hideAnswer:this.formCreateTest.value.hideAnswer,shuffleQuestion:this.formCreateTest.value.shuffleQuestion,password:this.formCreateTest.value.password,startAt:this.formCreateTest.value.startAt,endAt:this.formCreateTest.value.endAt,examId:this.examId}).subscribe(i=>{var o;"01000100"==(null===(o=i.result)||void 0===o?void 0:o.data)&&this.notificationService.info("s\u1ed1 l\u01b0\u1ee3ng c\xe2u h\u1ecfi v\u01b0\u1ee3t qu\xe1 s\u1ed1 c\xe2u h\u1ecfi c\u1ee7a \u0111\u1ec1 thi"),"00000000"==i.message&&this.notificationService.success("t\u1ea1o \u0111\u1ec1 thi th\xe0nh c\xf4ng")},i=>{console.log(i.error.message)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.q),t.Y36(l.gz),t.Y36(u.qu),t.Y36(v.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-test"]],decls:38,vars:3,consts:[[1,"main"],[2,"text-align","center","font-size","40px"],[3,"formGroup"],[1,"form-group"],["type","number","value","0","name","questionCount","formControlName","questionCount"],["type","number","value","","name","time","formControlName","time","min","0","max","4320"],["type","checkbox","value","false","name","hideAnswer","formControlName","hideAnswer"],[2,"margin-left","20px"],["type","checkbox","value","false","name","shuffleQuestion","formControlName","shuffleQuestion"],["type","datetime-local","name","startAt","formControlName","startAt"],["type","datetime-local","name","endAt","formControlName","endAt"],["type","text","minlength","3","maxlength","30","name","password","formControlName","password"],["type","submit",1,"btn","btn-outline-danger",2,"margin-bottom","10px",3,"click"],["routerLinkActive","router-link-active",1,"btn","btn-outline-danger",3,"routerLink"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"div",0),t.TgZ(2,"h3",1),t._uU(3,"T\u1ea1o test"),t.qZA(),t.TgZ(4,"form",2),t.TgZ(5,"div",3),t.TgZ(6,"label"),t._uU(7,"S\u1ed1 l\u01b0\u1ee3ng c\xe2u h\u1ecfi "),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"label"),t._uU(10,"Th\u1eddi gian l\xe0m b\xe0i (ph\xfat): "),t._UZ(11,"input",5),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"label"),t._uU(14,"\u1ea8n c\xe2u tr\u1ea3 l\u1eddi "),t._UZ(15,"input",6),t.qZA(),t.TgZ(16,"label",7),t._uU(17,"\u0110\u1ea3o th\u1ee9 t\u1ef1 c\xe2u h\u1ecfi "),t._UZ(18,"input",8),t.qZA(),t._UZ(19,"br"),t.TgZ(20,"label"),t._uU(21,"B\u1eaft \u0111\u1ea7u "),t._UZ(22,"input",9),t.qZA(),t.TgZ(23,"label"),t._uU(24,"K\u1ebft th\xfac "),t._UZ(25,"input",10),t.qZA(),t._UZ(26,"br"),t.TgZ(27,"label"),t._uU(28,"M\u1eadt kh\u1ea9u ca thi "),t._UZ(29,"input",11),t.qZA(),t._UZ(30,"br"),t.TgZ(31,"button",12),t.NdJ("click",function(){return i.submit()}),t._uU(32,"T\u1ea1o"),t.qZA(),t._UZ(33,"br"),t.TgZ(34,"a",13),t._uU(35,"Back"),t.qZA(),t.qZA(),t.qZA(),t._UZ(36,"app-notification"),t.qZA(),t._UZ(37,"app-footer")),2&e&&(t.xp6(4),t.Q6J("formGroup",i.formCreateTest),t.xp6(30),t.Q6J("routerLink",t.DdM(2,k)))},directives:[g.V,u._Y,u.JL,u.sg,u.wV,u.Fj,u.JJ,u.u,u.qQ,u.Fd,u.Wl,u.wO,u.nD,l.yS,l.Od,A.c,d.c],styles:[".main[_ngcontent-%COMP%]{width:600px;padding:30px;margin:30px auto 0;border:2px solid red;box-shadow:13px 15px 1px 1px #ccbfbfbf;-webkit-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);-moz-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);border-radius:4px;background-color:#e6e7f1;font-weight:500}"]}),n})();function D(n,a){1&n&&(t.TgZ(0,"div"),t.TgZ(1,"h2",3),t._uU(2,"\u0110\u1ec1 thi r\u1ed7ng"),t.qZA(),t.qZA())}function J(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"input",13),t.NdJ("change",function(o){return t.CHM(e),t.oxw(5).ChangeRight(o)}),t.qZA(),t._UZ(2,"span",14),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.s9C("value",e.id),t.Q6J("name",i.id)}}function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"input",15),t.NdJ("change",function(o){return t.CHM(e),t.oxw(5).ChangeRight(o)}),t.qZA(),t._UZ(2,"span",14),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.s9C("value",e.id),t.Q6J("name",i.id)}}function P(n,a){if(1&n&&(t.TgZ(0,"div",10),t.TgZ(1,"div",11),t.YNc(2,J,3,2,"div",0),t.YNc(3,F,3,2,"div",0),t.qZA(),t.TgZ(4,"label",12),t._uU(5),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Q6J("ngIf",e.rightAnswer),t.xp6(1),t.Q6J("ngIf",!e.rightAnswer),t.xp6(2),t.Oqu(e.answerContent)}}function L(n,a){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",8),t.TgZ(2,"b"),t._uU(3),t.qZA(),t.qZA(),t.YNc(4,P,6,3,"div",9),t.qZA()),2&n){const e=t.oxw(),i=e.index,o=e.$implicit,r=t.oxw(2);t.xp6(3),t.AsE("C\xe2u ",(r.urlQuery.pageNumber-1)*r.urlQuery.pageSize+i+1,": ",o.questionContent,""),t.xp6(1),t.Q6J("ngForOf",o.listAnswers)}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"input",16),t.NdJ("change",function(o){return t.CHM(e),t.oxw(5).ChangeRight(o)}),t.qZA(),t._UZ(2,"span",17),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.s9C("value",e.id),t.Q6J("name",i.id)}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"input",18),t.NdJ("change",function(o){return t.CHM(e),t.oxw(5).ChangeRight(o)}),t.qZA(),t._UZ(2,"span",17),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.s9C("value",e.id),t.Q6J("name",i.id)}}function S(n,a){if(1&n&&(t.TgZ(0,"div",10),t.TgZ(1,"div",11),t.YNc(2,N,3,2,"div",0),t.YNc(3,I,3,2,"div",0),t.qZA(),t.TgZ(4,"label",12),t._uU(5),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Q6J("ngIf",e.rightAnswer),t.xp6(1),t.Q6J("ngIf",!e.rightAnswer),t.xp6(2),t.hij("",e.answerContent," ")}}function Y(n,a){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",8),t.TgZ(2,"b"),t._uU(3),t.qZA(),t.qZA(),t.YNc(4,S,6,3,"div",9),t.qZA()),2&n){const e=t.oxw(),i=e.index,o=e.$implicit,r=t.oxw(2);t.xp6(3),t.AsE("C\xe2u: ",(r.urlQuery.pageNumber-1)*r.urlQuery.pageSize+i+1," ",o.questionContent,""),t.xp6(1),t.Q6J("ngForOf",o.listAnswers)}}function G(n,a){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",7),t.YNc(2,L,5,3,"div",0),t.YNc(3,Y,5,3,"div",0),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Q6J("ngIf",1==e.typeId),t.xp6(1),t.Q6J("ngIf",2==e.typeId)}}function R(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"app-paging",20),t.NdJ("changePage",function(o){return t.CHM(e),t.oxw(2).ChangePageHandler(o)}),t.qZA(),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("totalPage",e.TotalPage)("currentPage",e.urlQuery.pageNumber)}}function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-search",4),t.NdJ("search",function(o){return t.CHM(e),t.oxw().GetListQuestionOfExam(o)}),t.qZA(),t.YNc(2,G,4,2,"div",5),t.YNc(3,R,2,2,"div",6),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("textSearch",e.urlQuery.keyword),t.xp6(1),t.Q6J("ngForOf",e.ListQuestion),t.xp6(1),t.Q6J("ngIf",e.TotalPage>1)}}const B=function(){return["/exam"]};let H=(()=>{class n{constructor(e,i){this.examService=e,this.activeRoute=i,this.total=0,this.urlQuery=new _.e}ngOnInit(){this.GetListQuestionOfExam(this.urlQuery.keyword)}ChangePageHandler(e){this.urlQuery.pageNumber=e,this.GetListQuestionOfExam(this.urlQuery.keyword)}GetListQuestionOfExam(e){this.activeRoute.params.subscribe(i=>{this.examId=i.id}),this.urlQuery.keyword=e,this.examService.GetListQuestionOfExam(this.examId,this.urlQuery).subscribe(i=>{var o,r;this.ListQuestion=null===(o=i.result)||void 0===o?void 0:o.items,null!=this.ListQuestion&&(this.total=null===(r=i.result)||void 0===r?void 0:r.total,this.TotalPage=Math.ceil(this.total/this.urlQuery.pageSize)),console.log(this.ListQuestion)},i=>{console.log(i.error.message)})}ChangeRight(e){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.O),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-exam-detail"]],decls:10,vars:5,consts:[[4,"ngIf"],[1,"btn","btn-primary",2,"margin","10px 0 20px 50px",3,"routerLink"],[1,"btn","btn-danger",2,"margin","0 0 0 50px",3,"routerLink"],[2,"font-size","30px"],[3,"textSearch","search"],[4,"ngFor","ngForOf"],["style","margin: 10px 0 0 600px;",4,"ngIf"],[1,"question","ml-sm-5","pl-sm-5","pt-2","main"],[1,"py-2","h5"],["class","ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3","id","options",4,"ngFor","ngForOf"],["id","options",1,"ml-md-3","ml-sm-3","pl-md-5","pt-sm-0","pt-3"],[2,"display","inline-block"],[1,"options"],["type","radio","checked","true",3,"value","name","change"],[1,"checkmark"],["type","radio",3,"value","name","change"],["type","checkbox","checked","true",3,"value","name","change"],[1,"checkboxmark"],["type","checkbox",3,"value","name","change"],[2,"margin","10px 0 0 600px"],[3,"totalPage","currentPage","changePage"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"div"),t.YNc(2,D,3,0,"div",0),t.YNc(3,z,4,3,"div",0),t.TgZ(4,"a",1),t._uU(5,"Th\xeam c\xe2u h\u1ecfi"),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"a",2),t._uU(8,"Back"),t.qZA(),t.qZA(),t._UZ(9,"app-footer")),2&e&&(t.xp6(2),t.Q6J("ngIf",0==i.total),t.xp6(1),t.Q6J("ngIf",i.total>0),t.xp6(1),t.Q6J("routerLink","/exam/question/add-question/"+i.examId),t.xp6(3),t.Q6J("routerLink",t.DdM(4,B)))},directives:[g.V,c.O5,l.yS,d.c,h.g,c.sg,Z.L],styles:[".main[_ngcontent-%COMP%]{width:94%;padding:30px;margin:30px auto 0;border:1px solid red;border-radius:4px;background-color:#e6e7f1;font-weight:500}"]}),n})();function $(n,a){1&n&&(t.TgZ(0,"tbody"),t.TgZ(1,"tr"),t.TgZ(2,"td",5),t._uU(3,"Hi\u1ec7n ch\u01b0a c\xf3 b\xe0i thi n\xe0o"),t.qZA(),t.qZA(),t.qZA())}const f=function(n){return[n]};function V(n,a){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t.TgZ(16,"a",7),t._uU(17," Danh s\xe1ch "),t.qZA(),t.qZA(),t.TgZ(18,"td"),t.TgZ(19,"a",8),t._uU(20," T\u1ea1o c\xe2u h\u1ecfi "),t.qZA(),t.qZA(),t.TgZ(21,"td"),t.TgZ(22,"a",9),t._uU(23," T\u1ea1o test "),t.qZA(),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.createBy),t.xp6(2),t.Oqu(e.isPublic),t.xp6(2),t.Oqu(e.levelId),t.xp6(2),t.Oqu(e.time),t.xp6(2),t.Oqu(e.questionCount),t.xp6(2),t.Q6J("routerLink",t.VKq(10,f,"/exam/exam-detail/"+e.id)),t.xp6(3),t.Q6J("routerLink",t.VKq(12,f,"/exam/gen-question/"+e.id)),t.xp6(3),t.Q6J("routerLink",t.VKq(14,f,"/exam/create-test/"+e.id))}}function K(n,a){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,V,24,16,"tr",6),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.ListExam)}}function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-paging",10),t.NdJ("changePage",function(o){return t.CHM(e),t.oxw().ChangePageHandler(o)}),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("totalPage",e.TotalPage)("currentPage",e.urlQuery.pageNumber)}}const X=function(){return["/exam/add-exam/"]},W=function(){return["/exam/test-create/"]};let tt=(()=>{class n{constructor(e){this.examService=e,this.urlQuery=new _.e,this.Total=0}ngOnInit(){this.GetListExamCreateCurrentUser(this.urlQuery.keyword)}ChangePageHandler(e){this.urlQuery.pageNumber=e,this.GetListExamCreateCurrentUser(this.urlQuery.keyword)}GetListExamCreateCurrentUser(e){this.urlQuery.keyword=e,this.examService.GetListExamUser(this.urlQuery).subscribe(i=>{var o,r;this.ListExam=null===(o=i.result)||void 0===o?void 0:o.items,console.log(this.ListExam),this.Total=null===(r=i.result)||void 0===r?void 0:r.total,this.TotalPage=Math.ceil(this.Total/this.urlQuery.pageSize)},i=>{console.log(i)},()=>{})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-exam"]],decls:35,vars:8,consts:[[3,"textSearch","search"],[1,"table-bordered","table-hover",2,"font-weight","500"],[4,"ngIf"],["routerLinkActive","router-link-active",1,"btn","btn-success",2,"margin-left","5px",3,"routerLink"],[1,"btn","btn-outline-primary",2,"margin-left","5px",3,"routerLink"],["colspan","3"],[4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",1,"btn","btn-outline-warning",3,"routerLink"],["routerLinkActive","router-link-active",1,"btn","btn-outline-success",3,"routerLink"],["routerLinkActive","router-link-active",1,"btn","btn-outline-secondary",3,"routerLink"],[3,"totalPage","currentPage","changePage"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"h2"),t._uU(2,"Danh s\xe1ch b\xe0i thi"),t.qZA(),t.TgZ(3,"app-search",0),t.NdJ("search",function(r){return i.GetListExamCreateCurrentUser(r)}),t.qZA(),t.TgZ(4,"table",1),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"td"),t._uU(8,"Id"),t.qZA(),t.TgZ(9,"td"),t._uU(10,"Ti\xeau \u0111\u1ec1"),t.qZA(),t.TgZ(11,"td"),t._uU(12,"T\xe1c gi\u1ea3"),t.qZA(),t.TgZ(13,"td"),t._uU(14,"C\xf4ng khai"),t.qZA(),t.TgZ(15,"td"),t._uU(16,"M\u1ee9c \u0111\u1ed9"),t.qZA(),t.TgZ(17,"td"),t._uU(18,"th\u1eddi gian l\xe0m b\xe0i"),t.qZA(),t.TgZ(19,"td"),t._uU(20,"S\u1ed1 l\u01b0\u1ee3ng c\xe2u h\u1ecfi"),t.qZA(),t.TgZ(21,"td"),t._uU(22,"C\xe2u h\u1ecfi"),t.qZA(),t.TgZ(23,"td"),t._uU(24,"T\u1ea1o c\xe2u h\u1ecfi"),t.qZA(),t.TgZ(25,"td"),t._uU(26,"T\u1ea1o test"),t.qZA(),t.qZA(),t.qZA(),t.YNc(27,$,4,0,"tbody",2),t.YNc(28,K,2,1,"tbody",2),t.TgZ(29,"a",3),t._uU(30," Th\xeam \u0111\u1ec1 thi "),t.qZA(),t.qZA(),t.YNc(31,j,2,2,"div",2),t.TgZ(32,"a",4),t._uU(33,"Danh s\xe1ch cu\u1ed9c thi b\u1ea1n \u0111\xe3 t\u1ea1o"),t.qZA(),t._UZ(34,"app-footer")),2&e&&(t.xp6(3),t.Q6J("textSearch",i.urlQuery.keyword),t.xp6(24),t.Q6J("ngIf",0==i.Total),t.xp6(1),t.Q6J("ngIf",i.Total>0),t.xp6(1),t.Q6J("routerLink",t.DdM(6,X)),t.xp6(2),t.Q6J("ngIf",i.TotalPage>1),t.xp6(1),t.Q6J("routerLink",t.DdM(7,W)))},directives:[g.V,h.g,c.O5,l.yS,l.Od,d.c,c.sg,Z.L],styles:["table[_ngcontent-%COMP%]{width:100%}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:2%;padding-right:2%}table[_ngcontent-%COMP%]{font-weight:700;text-align:center;margin:auto}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-top:10px;width:100%;padding:10px 0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid black;text-align:center;margin-left:auto;margin-right:auto;padding:0 25px;font-size:15px}a[_ngcontent-%COMP%]{font-style:revert;font-size:20px;margin:5px 0}.btn-primary[_ngcontent-%COMP%]{margin-right:20px;margin-left:-29px}.btn-info[_ngcontent-%COMP%]{margin-right:-25px}"]}),n})();const et=function(){return["/exam/"]},it=function(n){return["/exam/analysis-result/",n]};function ot(n,a){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t.TgZ(18,"a",5),t._uU(19,"\u0110i\u1ec3m"),t.qZA(),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.testId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.startAt),t.xp6(2),t.Oqu(e.endAt),t.xp6(2),t.Oqu(e.questionCount),t.xp6(2),t.hij("",e.time," ph\xfat"),t.xp6(2),t.Oqu(e.password),t.xp6(2),t.Oqu(e.countDo),t.xp6(2),t.Q6J("routerLink",t.VKq(9,it,e.testId))}}const at=function(){return["/exam/"]},ut=[{path:"",children:[{path:"question",loadChildren:()=>s.e(123).then(s.bind(s,3123)).then(n=>n.QuestionModule)},{path:"add-exam",component:q,canActivate:[p.S],data:{expectedRole:"Teacher"}},{path:"gen-question/:id",component:(()=>{class n{constructor(e,i,o,r){this.examService=e,this.fb=i,this.activeRoute=o,this.notificationService=r}ngOnInit(){this.formGen=this.fb.group({file:[""],splitQuestion:[""],rightMark:[""]})}onSelectFile(e){const i=e.target.files;i.length>0&&this.examService.UpFileWord(i[0]).subscribe(r=>{console.log(r),this.selectedFile=r.data},r=>{console.log(r.error.message)})}Submit(){this.activeRoute.params.subscribe(i=>{this.examId=i.id}),this.examService.GenQuestionAuto({fileUp:this.selectedFile,splitNumberAndContent:this.formGen.value.splitQuestion,rightMark:this.formGen.value.rightMark,examId:this.examId}).subscribe(i=>{this.result=i,console.log(this.result),"00000000"==this.result.message&&this.notificationService.success("T\u1ea1o \u0111\u1ec1 thi th\xe0nh c\xf4ng")},i=>{console.log(i.error.message),this.notificationService.error("\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra!")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.O),t.Y36(u.qu),t.Y36(l.gz),t.Y36(v.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-gen-question"]],decls:23,vars:3,consts:[[1,"main"],[2,"text-align","center","font-size","40px"],[3,"formGroup"],[1,"form-group"],["type","file","placeholder","Upload file","formControlName","file",3,"change"],["type","text","placeholder","v\xed d\u1ee5: . ) ...","formControlName","splitQuestion"],["type","text","placeholder","v\xed d\u1ee5: $ \u1edf cu\u1ed1i c\xe2u","formControlName","rightMark"],["type","submit",1,"btn","btn-outline-success",2,"margin-bottom","10px",3,"click"],["routerLinkActive","router-link-active",1,"btn","btn-outline-danger",3,"routerLink"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"div",0),t.TgZ(2,"h2",1),t._uU(3,"T\u1ea1o c\xe2u h\u1ecfi"),t.qZA(),t.TgZ(4,"form",2),t.TgZ(5,"div",3),t.TgZ(6,"label"),t._uU(7," Upload file word "),t.TgZ(8,"input",4),t.NdJ("change",function(r){return i.onSelectFile(r)}),t.qZA(),t.qZA(),t.TgZ(9,"label"),t._uU(10," D\u1ea5u ph\xe2n bi\u1ec7t gi\u1eefa c\xe2u h\u1ecfi v\xe0 n\u1ed9i dung : "),t._UZ(11,"input",5),t.qZA(),t.TgZ(12,"label"),t._uU(13," D\u1ea5u hi\u1ec7u c\xe2u \u0111\xfang : "),t._UZ(14,"input",6),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"button",7),t.NdJ("click",function(){return i.Submit()}),t._uU(17,"T\u1ea1o"),t.qZA(),t._UZ(18,"br"),t.TgZ(19,"a",8),t._uU(20,"Back"),t.qZA(),t.qZA(),t.qZA(),t._UZ(21,"app-notification"),t.qZA(),t._UZ(22,"app-footer")),2&e&&(t.xp6(4),t.Q6J("formGroup",i.formGen),t.xp6(15),t.Q6J("routerLink",t.DdM(2,et)))},directives:[g.V,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,l.yS,l.Od,A.c,d.c],styles:[".main[_ngcontent-%COMP%]{width:600px;padding:30px;margin:30px auto 0;border:2px solid red;box-shadow:13px 15px 1px 1px #ccbfbfbf;-webkit-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);-moz-box-shadow:13px 15px 1px 1px rgba(204,191,191,.75);border-radius:4px;background-color:#e6e7f1;font-weight:500}"]}),n})(),canActivate:[p.S],data:{expectedRole:"Teacher"}},{path:"create-test/:id",component:M,canActivate:[p.S],data:{expectedRole:"Teacher"}},{path:"test-create",component:(()=>{class n{constructor(e){this.testService=e}ngOnInit(){this.GetListTestCreate()}GetListTestCreate(){return this.testService.GetListTestCreateBySelf().subscribe(e=>{var i;this.data=null===(i=e.result)||void 0===i?void 0:i.data,console.log(this.data)},e=>{console.log(e.error.message)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-test-create"]],decls:29,vars:3,consts:[[2,"font-size","40px","margin","0 auto"],[2,"margin","10px"],[1,"table-bordered","table-hover",2,"font-weight","500"],[4,"ngFor","ngForOf"],["type","submit","name","back",1,"btn","btn-danger",3,"routerLink"],[1,"btn","btn-outline-success",3,"routerLink"]],template:function(e,i){1&e&&(t._UZ(0,"app-header-v2"),t.TgZ(1,"h2",0),t._uU(2,"Danh s\xe1ch cu\u1ed9c thi b\u1ea1n \u0111\xe3 t\u1ea1o"),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"table",2),t.TgZ(5,"thead"),t.TgZ(6,"td"),t._uU(7,"M\xe3 test"),t.qZA(),t.TgZ(8,"td"),t._uU(9,"Ti\xeau \u0111\u1ec1"),t.qZA(),t.TgZ(10,"td"),t._uU(11,"Th\u1eddi gian b\u1eaft \u0111\u1ea7u"),t.qZA(),t.TgZ(12,"td"),t._uU(13,"Th\u1eddi gian k\u1ebft th\xfac"),t.qZA(),t.TgZ(14,"td"),t._uU(15,"S\u1ed1 c\xe2u h\u1ecfi"),t.qZA(),t.TgZ(16,"td"),t._uU(17,"Th\u1eddi gian l\xe0m b\xe0i"),t.qZA(),t.TgZ(18,"td"),t._uU(19,"M\u1eadt kh\u1ea9u ca thi"),t.qZA(),t.TgZ(20,"td"),t._uU(21,"S\u1ed1 ng\u01b0\u1eddi l\xe0m"),t.qZA(),t.TgZ(22,"td"),t._uU(23,"Th\u1ed1ng k\xea"),t.qZA(),t.qZA(),t.YNc(24,ot,20,11,"tr",3),t.qZA(),t._UZ(25,"br"),t.TgZ(26,"button",4),t._uU(27,"Back"),t.qZA(),t.qZA(),t._UZ(28,"app-footer")),2&e&&(t.xp6(24),t.Q6J("ngForOf",i.data),t.xp6(2),t.Q6J("routerLink",t.DdM(2,at)))},directives:[g.V,c.sg,l.rH,d.c,l.yS],styles:["table[_ngcontent-%COMP%]{font-weight:700;text-align:center;margin:auto}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-top:10px;width:100%;padding:10px 0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid black;text-align:center;margin-left:auto;margin-right:auto;padding:5px 25px;font-size:17px}a[_ngcontent-%COMP%]{font-style:revert;margin:8px -10px 11px -15px;padding:2px 19px;font-size:20px}thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid black;text-align:center;margin-left:auto;margin-right:auto;font-size:17px}"]}),n})(),canActivate:[p.S],data:{expectedRole:"Teacher"}},{path:"analysis-result/:id",component:O,canActivate:[p.S],data:{expectedRole:"Teacher"}},{path:"exam-detail/:id",component:H,canActivate:[p.S],data:{expectedRole:"Teacher"}},{path:"",component:tt,canActivate:[p.S],data:{expectedRole:"Teacher"}}]},{path:"",redirectTo:"exam",pathMatch:"full"}];let st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(ut)],l.Bz]}),n})(),lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[st,C.m,u.UX,u.u5,c.ez]]}),n})()}}]);