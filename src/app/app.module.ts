import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './works/work-detail.component';
import { WorkService } from './works/work.service';
import { Work } from './works/work';
import { AppRoutingModule, routableComponents } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WorksComponent,
    WorkDetailComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }