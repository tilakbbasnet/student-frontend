import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  checkValidUser(): void {
    const loggingUser = this.loginForm.value;
    this.loginService.checkValidUser(loggingUser).subscribe((user: User) => {
      if(user) { //if user is not null
        console.log('User logged in successfully');
        this.router.navigate(['home']);
      } else {
        alert('Invalid username or password!! Please try again');
      }
    })
  }
}
