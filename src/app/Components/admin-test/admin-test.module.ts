import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTestRoutingModule } from './admin-test-routing.module';
import { AdminTestComponent } from './admin-test.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';


@NgModule({
  declarations: [
    AdminTestComponent,
    AllFlightsComponent
  ],
  imports: [
    CommonModule,
    AdminTestRoutingModule
  ]
})
export class AdminTestModule { }
