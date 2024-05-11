import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup = new FormGroup('')
  public outputEmail:string = ''
  public user:User = {
    email:'',
    password:''
  }

  public errorMessage :string = ''
  public isLoggedIn = false

 @ViewChild('loginBtn') button: ElementRef | undefined;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private elementRef: ElementRef<HTMLElement>){}

  ngOnInit() {
    // const element = document.getElementById('submit-btn');
    // if(element){
    //   element.textContent = 'This is new content.';
    // }

    this.signinForm = this.formBuilder.group({
      email:[null,[Validators.email]],
      password:[null,[Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    console.log('this.user', this.user)
    console.log('this.signinForm', this.signinForm.value)
    // this.userService.signin(this.user).subscribe({
    //   next: (res) => {
    //     this.isLoggedIn =  true
    //     console.log(res)
    //     this.errorMessage = '' }  ,
    //   error: (error) =>{
    //     console.log(error)
    //     this.errorMessage = error.message
    //   },
    //   complete: () => console.info('complete') 
    // })
  }
}

export interface User {
  email:string
  password:string
}