import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminComponent } from './admin.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';

const routes: Routes = [
  {path:'', component:AdminComponent, children:[
    {path:'', component:AllFlightsComponent},
    {path:'addFlight', component:AddFlightComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
