import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted=false;
  constructor() { }

  ngOnInit(): void {}
  form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    console.log(this.form.value); //retrun all the form control values
  
  }

}
