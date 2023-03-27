import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Menu/about/about.component';
import { ForgetPassComponent } from './Authentication/forget-pass/forget-pass.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './Menu/contact/contact.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:"signup", component:SignupComponent},
  {path:"forgetpass", component:ForgetPassComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
