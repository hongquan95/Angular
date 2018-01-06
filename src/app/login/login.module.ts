import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { BangdieukhienComponent } from '../bangdieukhien/bangdieukhien.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, BodyComponent, HeaderComponent, FooterComponent, RegisterPageComponent, BangdieukhienComponent]
})
export class LoginModule { }
