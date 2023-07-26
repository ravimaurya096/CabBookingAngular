import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

// interface AuthResponseData {
//   kind: string;
//   idToken:string;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelperService = new JwtHelperService();

  signup(name: string, email:string, password: string){
    return this.http.post('https://localhost:7250/api/user', {
      name: name,
      email: email,
      password: password,
      returnSecuredToken: true
    });
  }

  signupdriver(name: string, email:string, password: string, address:string, pincode:number, dlnumber:string, age:number, phone:string, vehicleName:string, vehicleNumber:string){
    return this.http.post('https://localhost:7250/api/driver', {
      name: name,
      email: email,
      password: password,
      address: address,
      pincode: pincode,
      dlnumber:dlnumber,
      age:age,
      phone:phone,
      vehicle_name:vehicleName,
      vehicle_number:vehicleNumber,
      returnSecuredToken: true
    });
  }

  loginUser(email: string, password:string){
    console.log(email, password)
    return this.http.post('https://localhost:7250/api/user/LoginUser',{
      email: email,
      password: password,
      returnSecuredToken:true
    },{
      responseType:'text',
    });
  }
  setToken(token:string){
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }

  loginDriver(email: string, password:string){
    console.log(email, password)
    return this.http.post('https://localhost:7250/api/driver/LoginDriver',{
      email: email,
      password: password,
      returnSecuredToken:true
    },{
      responseType:'text',
    });
  }

  loginAdmin(email: string, password:string){
    console.log(email, password)
    return this.http.post('https://localhost:7250/api/admin/LoginAdmin',{
      email: email,
      password: password,
      returnSecuredToken:true
    },{
      responseType:'text',
    });
  }

  loadCurrentUser(){
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token):null;

    const data = userInfo ? {
      name : userInfo.Name,
      email:userInfo.Email
    } : null;
    this.currentUser.next(data);
  }

  isUserLoggedIn() : boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken(){
    localStorage.removeItem("access_token");
  }

}
