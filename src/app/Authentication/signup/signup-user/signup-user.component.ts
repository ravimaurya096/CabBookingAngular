import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../Auth-Services/auth-service.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent {

  @ViewChild('f') signupForm!: NgForm;

  isLoading = false;
  errorMessage:any = null;
  displayMessage = '';
  accountCreated = false;
  submitted=false;
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';

  constructor(private http:HttpClient, private authService:AuthServiceService){
  }

  checkPasswordsWithTemplateDrivenForms(form: NgForm) {
    if (form.value['password'] === form.value['confirmPass']) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid'
    }
  }


  onSubmit(){

    if(!this.signupForm.valid){
      return;
    }

    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.isLoading = true;

    this.authService.signup(name, email, password).subscribe( resData => {
      // console.log(resData);
      this.submitted = true;
      this.isLoading = false;
    },
    error => {
      console.log(error.error);
      if(error.error == "User Already Exists"){
        this.errorMessage = "User Already Exists"
        this.submitted = false;
      }
      else{
        this.errorMessage = "Something Went Wrong!!!"
      }
      // console.log(error);
      this.isLoading = false;
    }
    );
    this.errorMessage = null;
    this.signupForm.reset();
  }

}
