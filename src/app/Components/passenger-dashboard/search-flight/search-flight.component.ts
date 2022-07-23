import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';
import { PassengerService } from 'src/app/Services/passenger.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  searchResult: Flight[] = [];
  searchForm = new FormGroup({
    source: new FormControl('', [Validators.required, Validators.email]),
    destination: new FormControl('', Validators.required),
  });
  constructor(private passengerSvc: PassengerService, private router: Router) { }

  ngOnInit(): void {
  }

  search(): void{
    console.log(this.searchForm.value.source, this.searchForm.value.destination);
    this.passengerSvc.searchFlight(this.searchForm.value.source, this.searchForm.value.destination).subscribe( (response:any)=>{
      this.searchResult = response;
    })
  }
  book(flightId:any){
    this.router.navigate(['/passenger/bookFlight/'+flightId])
  }
}
