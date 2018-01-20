import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterMdRoutingModule } from './register-md-routing.module';
import { RegisterMdComponent } from './register-md.component';
import { BangdieukhienComponent } from '../bangdieukhien/bangdieukhien.component';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterMdRoutingModule
  ],
  declarations: [RegisterMdComponent, BangdieukhienComponent ]

})
export class RegisterMdModule { }
