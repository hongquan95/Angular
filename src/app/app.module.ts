import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BangdieukhienComponent } from './bangdieukhien/bangdieukhien.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskregisterComponent } from './taskregister/taskregister.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    // HeaderComponent,
    // FooterComponent,
    // RegisterPageComponent,
    // BangdieukhienComponent,
    TaskregisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
