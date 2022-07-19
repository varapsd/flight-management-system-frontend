import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/homepage/login/login.component';
import { SignupComponent } from './Components/homepage/signup/signup.component';

const routes: Routes = [
  {path:'', component: HomepageComponent, children:[
    {path:'', component: LoginComponent},
    {path:'signup',component: SignupComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
