import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BodyComponent } from '../body/body.component';

import { FooterComponent } from '../footer/footer.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
// import { FormsModule } from '@angular/forms';
import { ValidateDirective } from '../register-page/validate.directive';
import {DpDatePickerModule} from 'ng2-date-picker';
import { HeaderComponent } from '../header/header.component';
import { PhrComponent } from '../layout/phr/phr.component';
import { ReactiveFormsModule, FormsModule} from'@angular/forms';
import { RequestComponent } from '../request/request.component';

// import { BangdieukhienComponent } from '../bangdieukhien/bangdieukhien.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    DpDatePickerModule,
    ReactiveFormsModule,
    // RequestComponent,
  ],
  providers:[ValidateDirective],
  declarations: [LoginComponent, BodyComponent, FooterComponent, RegisterPageComponent, HeaderComponent, PhrComponent, RequestComponent]
})
export class LoginModule { }
