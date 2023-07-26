import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Auth-Services/auth-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  @ViewChild('f') loginForm!: NgForm;
  isUserValid:boolean = false;
  isLoading:boolean = false;

  constructor(private authservice: AuthServiceService, private router:Router){}

  onSubmit(){

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;


    this.authservice.loginAdmin(email, password).subscribe(resData => {
      this.isLoading = true;
      if(resData == 'Failure'){
        alert('Login unsuccessfull !!');
        this.isLoading = false;
      }
      else{
        this.isUserValid = true;
        this.authservice.setToken(resData);
        this.router.navigate(['/home']);
      }
    })
    this.isLoading = false;

  }
}
