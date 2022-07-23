import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/Services/passenger.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  bookings:any=[];
  constructor(private passengerSvc: PassengerService) { }

  ngOnInit(): void {
    this.passengerSvc.getBookings().subscribe((response)=>{
      if(response){
        console.log(response);
        this.bookings = response;
      }
    })
  }

}
