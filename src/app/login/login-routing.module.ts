import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { BodyComponent } from '../body/body.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
// import { BangdieukhienComponent } from '../bangdieukhien/bangdieukhien.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { HeaderComponent } from '../header/header.component';
import { PhrComponent } from '../layout/phr/phr.component';
import { RequestComponent } from '../request/request.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    
  },
  // {
  //   path:'bangdieukhien',
  //   component:BangdieukhienComponent
  // },
  {
    path: 'dangky',
    component: RegisterPageComponent
  },
  {
    path: 'phr',
    component:PhrComponent
  },
  {
    path:'request',
    component: RequestComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
