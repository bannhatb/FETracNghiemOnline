import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlQuery } from 'src/app/shared/Models/UrlQuery';
import { AdminService } from 'src/app/shared/services/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId : number;
  data: any;
  dem: number;
  dem1: number;
  dem2: number;
  urlQuery = new UrlQuery();
  formUpdate : any;
  constructor(private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.formUpdate = this.fb.group({
      userName: [''],
      email: [''],
      dateOfBirth: [''],
      gender: [Boolean],
      firstName:[''],
      lastName:['']
    })
    this.GetUserDetail();
  }
  GetUserDetail(){
    this.activeRoute.params.subscribe((id)=>{
      this.userId= id.id;
    })
    this.adminService.GetUserDetail(this.userId, this.urlQuery).subscribe((res)=>{
      this.data = res.result?.data
      console.log(this.data);
      this.dem = (this.data.listTestDid).length;
      this.dem1 = (this.data.listTestCreate).length;
      this.dem2 = (this.data.listTestDid).length;
      this.formUpdate = this.fb.group({
        userName: this.data.userName,
        email: this.data.email,
        dateOfBirth: this.data.dateOfBirth,
        gender: this.data.gender,
        firstName: this.data.firstName,
        lastName:this.data.lastName
      })
    },(err)=>{
      console.log(err.error.message);
    });

  }
  UpdateProfile(){
    let requestModel = {
      userId : this.userId,
      userName: this.formUpdate.value.userName,
      email: this.formUpdate.value.email,
      dateOfBirth: this.formUpdate.value.dateOfBirth,
      gender:  this.formUpdate.value.gender,
      firstName:  this.formUpdate.value.firstName,
      lastName:  this.formUpdate.value.lastName
    }
    this.adminService.UpdateProfileUser(requestModel).subscribe((res)=>{
      console.log('success');
    },(err)=>{
      console.log(requestModel);
      
      console.log(err.message);
      
    })
  }

}
