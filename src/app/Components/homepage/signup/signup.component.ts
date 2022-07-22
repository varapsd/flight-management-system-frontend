import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
submitted=false;
  constructor() { }

  ngOnInit(): void {}
  form=new FormGroup({
    username:new FormControl('',[Validators.required]),
    contact:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required])
  });
  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    console.log(this.form.value); //retrun all the form control values
  
  }
}
