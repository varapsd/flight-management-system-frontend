import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginSvc: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  
  login(){
    if(this.loginForm.invalid){
      alert("invalid inputs");
      return;
    }
    if(this.loginForm.value.email == 'admin'){
      this.loginSvc.AdminLogin(this.loginForm.value.email, this.loginForm.value.password).subscribe( (response:any) =>{
        if(response){
          this.router.navigate(['/admin']);
        }
      })
    }
    else{
      this.loginSvc.PassengerLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe((response:any) =>{
        if(response){
          this.router.navigate(['/passenger']);
        }
        
      })
    }
  }

} 
