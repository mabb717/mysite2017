import {Component} from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './works/work-detail.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from '../pagenotfound.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorksComponent },
  { path: 'work/:id', component: WorkDetailComponent },
  { path: 'about', component: DetailsComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routableComponents = [
  HomeComponent,
  WorksComponent,
  WorkDetailComponent,
  DetailsComponent,
  PageNotFoundComponent
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);