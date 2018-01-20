import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhrComponent } from './phr/phr.component';


const routes: Routes = [
  {
    path: '/phr',
    component: PhrComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
