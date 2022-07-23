import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../Models/flight';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api_url: string = environment.api_url;

  constructor(private apiSvc: ApiService) { }
  getAllFlights(){
      const auth_token = this.apiSvc.getJwtToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      let subject = new Subject<Flight[]>();
      var response:Flight[] = [];
      this.apiSvc.get(this.api_url + "api/flight/GetAllFlights", headers).subscribe((res:Flight[]) => {
        if (res) {
          response = res;
        }
        subject.next(response)
        
      })
      return subject.asObservable();
  }

  addFlight(flight:any){
    const auth_token = this.apiSvc.getJwtToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
      let subject = new Subject<boolean>();
      var response = false;
      this.apiSvc.post(this.api_url + "api/flight/addFlight", headers, flight).subscribe((res:any) => {
        console.log(res);
        response=true;
        
      })
      return subject.asObservable();
  }
}
