import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  flightID:number=12;
  flightName:string="Indigo";
  departure:string=new Date("2016-01-17T08:44:29+0100").toLocaleString();
  arrival:string=new Date("2016-01-17T08:44:29+0100").toLocaleString();
  class:string="Economy";
  nPassengers:number=3;
  payment:number=1200;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigate(['/']);}
}
