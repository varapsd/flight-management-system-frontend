import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';
import { LoginService } from 'src/app/Services/login.service';
import { PassengerService } from 'src/app/Services/passenger.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  flight:Flight = {
    flightId: 10001,
    name: 'Cargo',
    source: 'hyderabad',
    destination: 'mumbai',
    departureTime: '11:00 AM',
    arrivalTime: '1:30 PM',
    businessPrice: 6000,
    economyPrice: 4000,
    businessSeat: 150,
    economySeat: 200
  }

  bookForm = new FormGroup({
    journeyDate: new FormControl('', Validators.required),
    className: new FormControl('', Validators.required),
    passNo: new FormControl(0, Validators.required),
  });
  price:number=0;
  confirm:boolean=false
  flightId:number=9;
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private passengerSvc: PassengerService, private loginSvc: LoginService) { 
    this.activatedRoute.params.subscribe(p=>this.flightId=p['flightId']);
  }

  ngOnInit(): void {
    this.passengerSvc.getFlightById(this.flightId).subscribe( (response:any)=>{
      this.flight = response;
    })
  }
  updatePrice(){
    if(this.bookForm.value.className == 'business'){
      this.price = this.flight.businessPrice * (this.bookForm.value.passNo ? this.bookForm.value.passNo : 0);
    }
    else{
      this.price = this.flight.economyPrice * (this.bookForm.value.passNo ? this.bookForm.value.passNo : 0);
    }
  }
  submit(){
    alert("Payment Done");
    let req = {
      flightId: this.flightId,
      passengerId: this.loginSvc.getId(),
      className: this.bookForm.value.className,
      seatNo: this.bookForm.value.passNo,
      flightDate: this.bookForm.value.journeyDate
    }
    this.passengerSvc.bookFlight(req).subscribe( (res)=>{
      console.log(res);
      if(res){
        alert("Flight Booked");
        this.router.navigate(['/passenger']);
      }
    })
  }

}
