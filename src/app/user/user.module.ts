import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VideotourComponent } from './videotour/videotour.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [HomeComponent, VideotourComponent, EventsComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class UserModule { }
