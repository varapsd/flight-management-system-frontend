import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTestComponent } from './admin-test.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';

const routes: Routes = [
  {path:'', component:AdminTestComponent, children:[
    {path:'', component:AllFlightsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTestRoutingModule { }
