import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: any;
  private email:any;
  private password:any;

  getName() : any{
    return this.userName;
  }

  getEmail():any{
    return this.email;
  }
  setName(username:any):any{
    this.userName = username;
  }
  setEmail(email:any):any{
    this.email=email;
  }
  getPassword():any{
    return this.password;
  }
  setPassword(password:any):any{
    this.password=password;
  }

  constructor() {
    
    
    // let 
   }
}
