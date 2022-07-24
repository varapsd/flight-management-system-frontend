import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private loginSvc: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(!this.loginSvc.isLogin()){
      this.router.navigate(['/']);
    }
    else if(this.loginSvc.userType()!='admin'){
      this.router.navigate(['/passenger']);
    }
  }
  logout(){
    this.loginSvc.logout();
    this.router.navigate(['/'])
  }
}
