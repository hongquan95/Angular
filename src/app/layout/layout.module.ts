import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { PhrComponent } from './phr/phr.component';
import { ReactiveFormsModule, FormsModule} from'@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [PhrComponent]
})
export class LayoutModule { }
