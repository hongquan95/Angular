import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRemakeRoutingModule } from './login-remake-routing.module';
import { LoginRemakeComponent } from './login-remake.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRemakeRoutingModule
  ],
  declarations: [LoginRemakeComponent]
})
export class LoginRemakeModule { }
