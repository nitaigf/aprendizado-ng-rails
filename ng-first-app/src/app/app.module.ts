import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent
  ],
  providers: []
})
export class AppModule { }
