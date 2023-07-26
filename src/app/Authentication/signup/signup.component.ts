import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../Auth-Services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[]
})
export class SignupComponent {

  isUser = false;
  isDriver = false;
  
  userClicked(){
    this.isUser = true
    this.isDriver = false
  }

  driverClicked(){
    this.isUser = false
    this.isDriver = true
  }
  
}
