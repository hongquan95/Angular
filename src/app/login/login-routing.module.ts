import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { BodyComponent } from '../body/body.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { BangdieukhienComponent } from '../bangdieukhien/bangdieukhien.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    
  },
  {
    path:'bangdieukhien',
    component:BangdieukhienComponent
  },
  {
    path: 'dangky',
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
