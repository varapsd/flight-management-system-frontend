import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url: string = environment.api_url;
  constructor(private httpClient: HttpClient, private apiSvc: ApiService) { }

  isLogin():any{
    if(localStorage.getItem("jwt-token")){
      return true;
    }
    else{
      return false;
    }
  }
  userType():any{
    return localStorage.getItem("user-type");
  }
  getId():any{
    return localStorage.getItem("id");
  }
  getName():any{
    return localStorage.getItem("name");
  }
  PassengerLogin(emailId: any, password: any): any {
    // const auth_token = this.apiSvc.getJwtToken();
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${auth_token}`
    // });
    const body = {
      email: emailId,
      password: password
    }
    let subject = new Subject<boolean>();
    var response = false;
    this.apiSvc.post(this.api_url + "api/login/passenger", {}, body).subscribe((res) => {
      if (res && res.token) {
        console.log(res);
        localStorage.setItem("jwt-token", res.token);
        localStorage.setItem("user-type", "passenger");
        localStorage.setItem("id", res.passengerId);
        localStorage.setItem("name", res.name);
        response = true;
      }
      else{
        response = false;
      }
      subject.next(response)
      
    })
    return subject.asObservable();
  };
  PassengerSignup(passenger:any){
    const body = {
      email: passenger.email,
      phone: passenger.phone,
      name: passenger.name,
      password: passenger.password
    }

    let subject = new Subject<boolean>();
    var response = false;
    this.apiSvc.post(this.api_url + "api/passenger/AddPassenger", {}, body).subscribe((res) => {
      response=true;
      subject.next(response)
    })
    return subject.asObservable();
  }
  logout():any{
    localStorage.removeItem("jwt-token");
  }
}
