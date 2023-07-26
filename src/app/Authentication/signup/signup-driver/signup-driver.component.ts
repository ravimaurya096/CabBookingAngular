import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../Auth-Services/auth-service.service';

@Component({
  selector: 'app-signup-driver',
  templateUrl: './signup-driver.component.html',
  styleUrls: ['./signup-driver.component.css']
})
export class SignupDriverComponent {
  
  @ViewChild('f') signupForm!: NgForm;

  isLoading = false;
  errorMessage:any = null;
  displayMessage = '';
  accountCreated = false;
  submitted=false;

  constructor(private http:HttpClient, private authService:AuthServiceService){}

  onSubmit(){
    if(!this.signupForm.valid){
      return;
    }

    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const address = this.signupForm.value.address;
    const pincode = this.signupForm.value.pincode;
    const dlnumber = this.signupForm.value.license;
    const age = this.signupForm.value.age;
    const phone = this.signupForm.value.phone;
    const vehicleName = this.signupForm.value.vehicleName;
    const vehicleNumber = this.signupForm.value.vehicleNumber;

    console.log(this.signupForm);

    this.isLoading = true;

    this.authService.signupdriver(name, email, password, address, pincode, dlnumber, age, phone, vehicleName, vehicleNumber).subscribe( resData => {
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
    // this.signupForm.reset();
  }

}
