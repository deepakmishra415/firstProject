import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup = new FormGroup('')

  public user:User = {
    email:'',
    password:''
  }

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService){}

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email:[null,[Validators.email]],
      password:[null,[Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    this.userService.signin(this.user).subscribe(
      res => {console.log(res)},
      error =>{console.log(error)}
    )
  }
}

export interface User {
  email:string
  password:string
}