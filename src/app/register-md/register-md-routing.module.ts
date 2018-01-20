import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BangdieukhienComponent } from '../bangdieukhien/bangdieukhien.component';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [

  {
    path: '',
    component: BangdieukhienComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterMdRoutingModule { }
