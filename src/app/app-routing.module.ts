import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Menu/about/about.component';
import { ForgetPassComponent } from './Authentication/forget-pass/forget-pass.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './Menu/contact/contact.component';
import { ErrorPageComponent } from './Error/error-page/error-page.component';
import { WelcomePageComponent } from './Home/welcome-page/welcome-page.component';
import { AuthGuard } from './Services/auth.guard';
import { LoginUserComponent } from './Authentication/login-page/login-user/login-user.component';
import { LoginAdminComponent } from './Authentication/login-page/login-admin/login-admin.component';
import { LoginDriverComponent } from './Authentication/login-page/login-driver/login-driver.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'login',
  component: LoginPageComponent,
  children: [
    { path: '', redirectTo: 'loginuser', pathMatch: 'full' },
    { path: 'userlogin', component: LoginUserComponent, outlet: 'outlet1' },
    { path: 'adminlogin', component: LoginAdminComponent, outlet: 'outlet1' },
    { path: 'driverlogin', component: LoginDriverComponent, outlet: 'outlet1' }
  ]},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgetpass', component:ForgetPassComponent},
  {path:'home', component:WelcomePageComponent, canActivate:[AuthGuard]},
  // {path:'userlogin', component:LoginUserComponent, outlet:'outlet1'},
  // {path:'adminlogin', component:LoginAdminComponent, outlet:'outlet1'},
  // {path:'driverlogin', component:LoginDriverComponent, outlet:'outlet1'},
  {path: '**', component:ErrorPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
