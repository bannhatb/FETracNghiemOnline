import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { AuthenticationService } from '../../services/authentication.service';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-header',
	// imports: [NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // standalone: true,
})
export class HeaderComponent implements OnInit {

  constructor(private checkAuthor: AuthGuard,
    private authen: AuthenticationService , public router: Router,public acount : AccountService) {
    
  }
  userName : any ;
  ngOnInit(): void {
    this.check = this.checkAuthor.isAuthenticated();
    this.getUserName()
    // console.log(AuthGuard)
  }
  check:boolean = false;
  logout1(){
    this.authen.Logout();
    this.router.navigateByUrl(`/login`);
  }
  getUserName(){
    this.acount.getUserName().subscribe((res)=>{
      this.userName = res;
      // console.log(res.);
    }, (err)=>{
      console.log(err.error.message);
    })
  }
}
