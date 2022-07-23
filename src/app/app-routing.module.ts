import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { AllFlightsComponent } from './Components/admin/all-flights/all-flights.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/homepage/login/login.component';
import { SignupComponent } from './Components/homepage/signup/signup.component';
import { BookFlightComponent } from './Components/passenger-dashboard/book-flight/book-flight.component';
import { BookingHistoryComponent } from './Components/passenger-dashboard/booking-history/booking-history.component';
import { PassengerDashboardComponent } from './Components/passenger-dashboard/passenger-dashboard.component';
import { SearchFlightComponent } from './Components/passenger-dashboard/search-flight/search-flight.component';

const routes: Routes = [
  {path:'', component: HomepageComponent, children:[
    {path:'', component: LoginComponent},
    {path:'signup',component: SignupComponent}
  ]},
  {path:'passenger', component: PassengerDashboardComponent, children:[
    {path:'', component: SearchFlightComponent},
    {path:'bookFlight/:flightId', component: BookFlightComponent },
    {path: 'bookingHistory', component: BookingHistoryComponent}
  ]},
  {path:'admin', loadChildren: () => import("./Components/admin/admin.module").then((e) => e.AdminModule)},
  {path:'admin-test', loadChildren: ()=> import('./Components/admin-test/admin-test.module').then( (e) => e.AdminTestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
