import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  getJwtToken()
  {
    return localStorage.getItem("jwt-token");
  }
  get(url:string, headers:any):Observable<any>
  {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${auth_token}`
    // });
    return this.httpClient.get<any>(url,{ headers : headers});
  };
  post(url:string, headers:any, body:any):Observable<any>
  {
    return this.httpClient.post<any>(url, body, {headers:headers})
  }
}
