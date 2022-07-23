import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private loginSvc: LoginService, private router: Router) { }
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    
  });
  ngOnInit(): void {
  }
  signup():void{
    console.log(this.signupForm.value);
    if(this.signupForm.value.password != this.signupForm.value.confirmPassword){
      return;
    }
    this.loginSvc.PassengerSignup(this.signupForm.value).subscribe((response:any) =>{
      if(response){
        alert("success")
        this.router.navigate(['']);
        return;
      }
      alert("failed")
    })
  }

}
