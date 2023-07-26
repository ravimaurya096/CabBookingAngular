import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Authentication/Auth-Services/auth-service.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  name = '';
  email = '';

  constructor(private authservice: AuthServiceService, private router: Router){}
  ngOnInit(): void {
   this.authservice.currentUser.subscribe(objectValue => {
    this.name = objectValue.name;
    this.email = objectValue.email;
   }) 
  }

  logout(){

    this.authservice.removeToken();
    this.router.navigate(['']);

  }

}
