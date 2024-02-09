import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  registerForm: FormGroup = this.formBuilder.group({
    fullName: [''],
    userName: [''],
    password: ['']
  });

  constructor(private formBuilder: FormBuilder,
    private userService: LoginService,
    private router: Router){
      
    }

  registerUser(): void {
    const newUser = this.registerForm.value;
    this.userService.saveUser(newUser).subscribe((result: string) => {
      if(result === 'success') {
        // navigate to login page
        this.router.navigate([''])
      } else {
        alert('User not created!')
      }
    })
  }
}
