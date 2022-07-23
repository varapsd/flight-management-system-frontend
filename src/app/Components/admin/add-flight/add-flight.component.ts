import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  addFlightForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    source: new FormControl('', [Validators.required]),
    destination: new FormControl('', Validators.required),
    departureTime: new FormControl('', Validators.required),
    arrivalTime: new FormControl('', Validators.required),
    businessPrice: new FormControl('', Validators.required),
    economyPrice: new FormControl('', Validators.required),
    businessSeat: new FormControl('', Validators.required),
    economySeat: new FormControl('', Validators.required),
  });
  constructor(private adminSvc: AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  addFlight(){
    console.log(this.addFlightForm.value);
    this.adminSvc.addFlight(this.addFlightForm.value).subscribe( (response:any)=>{
    })
    this.router.navigate(['/admin'])
  }

}
