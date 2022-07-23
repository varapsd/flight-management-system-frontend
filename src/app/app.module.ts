import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/homepage/login/login.component';
import { SignupComponent } from './Components/homepage/signup/signup.component';
import { PassengerDashboardComponent } from './Components/passenger-dashboard/passenger-dashboard.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFlightComponent } from './Components/passenger-dashboard/search-flight/search-flight.component';
import { BookFlightComponent } from './Components/passenger-dashboard/book-flight/book-flight.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SharedModule } from './Components/shared/shared.module';
import { AdminModule } from './Components/admin/admin.module';
import { BookingHistoryComponent } from './Components/passenger-dashboard/booking-history/booking-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    PassengerDashboardComponent,
    SearchFlightComponent,
    BookFlightComponent,
    BookingHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
