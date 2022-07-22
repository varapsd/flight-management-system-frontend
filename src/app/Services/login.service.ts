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
  PassengerLogin(emailId: any, password: any): any {
    // const auth_token = this.apiSvc.getJwtToken();
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${auth_token}`
    // });
    console.log(emailId, password);
    
    const body = {
      emailId: emailId,
      passengerPassword: password
    }
    let subject = new Subject<boolean>();
    var response = false;
    this.apiSvc.post(this.api_url + "api/login/passenger", {}, body).subscribe((res) => {
      if (res && res.token) {
        console.log(res.token);
        
        localStorage.setItem("jwt-token", res.token);
        response = true;
      }
      else{
        response = false;
      }
      subject.next(response)
      
    })
    return subject.asObservable();
  };
}
