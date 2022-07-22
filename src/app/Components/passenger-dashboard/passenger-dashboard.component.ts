import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengerName:string = "User"
  constructor(private loginSvc: LoginService, private router: Router) { }

  ngOnInit(): void {
    /*
    if(!this.loginSvc.isLogin()){
      this.router.navigate(['']);

    }
    */
  }

}
