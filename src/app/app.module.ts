import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgModel} from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

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
import { AuthInterceptorService } from './auth-intercepter.service';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { ErrorPageComponent } from './Error/error-page/error-page.component';
import { WelcomePageComponent } from './Home/welcome-page/welcome-page.component';
import { HomeNavbarComponent } from './Home/HomeNav/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './Home/HomeFooter/home-footer/home-footer.component';
import { SignupDriverComponent } from './Authentication/signup/signup-driver/signup-driver.component';
import { SignupUserComponent } from './Authentication/signup/signup-user/signup-user.component';
import { LoginUserComponent } from './Authentication/login-page/login-user/login-user.component';
import { LoginAdminComponent } from './Authentication/login-page/login-admin/login-admin.component';
import { LoginDriverComponent } from './Authentication/login-page/login-driver/login-driver.component';


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
 ContactComponent,
 LoadingSpinnerComponent,
 ErrorPageComponent,
 WelcomePageComponent,
 HomeNavbarComponent,
 HomeFooterComponent,
 SignupUserComponent,
 SignupDriverComponent,
 SignupUserComponent,
 LoginUserComponent,
 LoginAdminComponent,
 LoginDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
