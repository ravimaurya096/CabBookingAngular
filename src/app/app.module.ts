import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgModel} from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { ForgetPassComponent } from './Authentication/forget-pass/forget-pass.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './Menu/about/about.component';
import { ContactComponent } from './Menu/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
 LoginPageComponent,
 FooterComponent,
 SignupComponent,
 ForgetPassComponent,
 NavbarComponent,
 AboutComponent,
 ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
