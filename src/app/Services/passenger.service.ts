import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../Models/flight';
import { ApiService } from './api.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  api_url: string = environment.api_url;

  constructor(private apiSvc: ApiService, private loginSvc: LoginService) { }
  
  searchFlight(source:any, destination:any):any{
    const body = {
      source: source,
      destination: destination
    }

    const auth_token = this.apiSvc.getJwtToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    let subject = new Subject<Flight[]>();
    var response:Flight[] = [];
    this.apiSvc.post(this.api_url + "api/flight/searchFlight", headers, body).subscribe((res:Flight[]) => {
      if (res) {
        response = res;
      }
      subject.next(response)
      
    })
    return subject.asObservable();
  }

  bookFlight(req:any){

    const body={
      flightId: Number(req.flightId),
      passengerId: Number(req.passengerId),
      className: req.className,
      seatNo: Number(req.seatNo),
      flightDate: req.flightDate
    }
    
    const auth_token = this.apiSvc.getJwtToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    let subject = new Subject<boolean>();
    var response = false;
    this.apiSvc.post(this.api_url + "api/booking/addbooking", headers, body).subscribe((res:any) => {
      response = true;
      subject.next(response)
      
    })
    return subject.asObservable();
  }

  getFlightById(id:number):any{
    const auth_token = this.apiSvc.getJwtToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    let subject = new Subject<Flight>();
    var response = null;
    this.apiSvc.get(this.api_url + "api/flight/GetFlightbyFlightId/"+id, headers).subscribe((res) => {
      response = res;
      subject.next(response)
    })
    return subject.asObservable();
  }
  getBookings(){
    var passengerId = this.loginSvc.getId();
    const auth_token = this.apiSvc.getJwtToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    let subject = new Subject<any>();
    var response = null;
    this.apiSvc.get(this.api_url+"api/booking/GetBookingsByPassengerId/"+passengerId, headers).subscribe( res =>{
      if(res){
        response = res;
        subject.next(response);
      }
    })
    return subject.asObservable();
  }
}
