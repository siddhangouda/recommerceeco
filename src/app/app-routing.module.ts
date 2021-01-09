import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AdminComponent } from 'src/app/admin/admin/admin.component'
import {HomeComponent } from 'src/app/user/home/home.component'
import {RegisterComponent} from 'src/app/register/register/register.component'



const routes: Routes = [{path : "admin", component: AdminComponent},
                        {path : "home" , component: HomeComponent},
                        {path : 'register/:id' , component :RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
