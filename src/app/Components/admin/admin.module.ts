import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { AdminComponent } from './admin.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, AllFlightsComponent, AddFlightComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
