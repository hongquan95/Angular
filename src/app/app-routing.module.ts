import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router/';

const routers: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
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
