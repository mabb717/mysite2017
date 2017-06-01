import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routableComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './works/work-detail.component';
import { WorkService } from './works/work.service';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  DetailsComponent,
  WorksComponent,
  WorkDetailComponent,
  routableComponents,
  SafePipe

  ],
  imports: [
  BrowserModule,
  HttpModule,
  AppRoutingModule
  ],
  providers: [
  Title,
  WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }