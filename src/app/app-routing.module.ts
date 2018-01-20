import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router/';

import { RegisterMdComponent } from './register-md/register-md.component';

import{ RegisterMdModule } from './register-md/register-md.module';
import {LoginModule} from './login/login.module';
import {LayoutModule} from './layout/layout.module';


const routers: Routes = [
  {
    path: '',
    // loadChildren: './login/login.module#LoginModule',
    loadChildren: () => LoginModule,

  },
  {
    path:'bangdieukhien',
    loadChildren: () => RegisterMdModule,
  }
  

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
