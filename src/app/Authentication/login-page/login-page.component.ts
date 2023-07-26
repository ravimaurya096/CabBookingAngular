import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Auth-Services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  isUser = false;
  isDriver = false;
  isAdmin = false;
  
  userClicked(){
    this.isUser = true
    this.isAdmin = false
    this.isDriver = false
  }

  driverClicked(){
    this.isUser = false
    this.isAdmin = false
    this.isDriver = true
  }
  adminClicked(){
    this.isUser = false
    this.isAdmin = true
    this.isDriver = false
  }
  

}
