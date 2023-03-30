import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignupComponent implements OnInit{

  @ViewChild('f') signupForm!: NgForm;

  submitted=false;

  user = {
    Name: '',
    Email: '',
    Password: ''
  };

  constructor(private userService:UserService, private http:HttpClient){}
  ngOnInit(): void {
    this.fetchPosts();
  }

  onSubmit(){

    this.user.Name = this.signupForm.value.name;
    this.user.Email = this.signupForm.value.email;
    this.user.Password = this.signupForm.value.password;
    this.submitted = true;

    this.http.post('https://localhost:7250/api/user', this.user).subscribe(responseData =>{});

    this.signupForm.reset();
    console.log(this.user);
  }

  private fetchPosts(){
    this.http.get('https://localhost:7250/api/user').subscribe(posts => {
      console.log(posts);
    })
  }
}
