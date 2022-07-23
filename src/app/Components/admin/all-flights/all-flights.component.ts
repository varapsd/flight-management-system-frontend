import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.scss'],
})
export class AllFlightsComponent implements OnInit {
  allFlights:Flight[] = [{
    flightId : 123,
    name : "indira",
    source : "hyderabad",
    destination : "mumbai",
    departureTime : "11:00AM",
    arrivalTime : "9:00AM",
    businessPrice : 2000,
    economyPrice : 1500,
    businessSeat : 60,
    economySeat : 50
  }];
  constructor(private adminSvc: AdminService) { }
  
  ngOnInit(): void {
    this.adminSvc.getAllFlights().subscribe( (response:any)=>{
      this.allFlights = response;
    })
  }
  

}
