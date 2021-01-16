import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VideotourComponent } from './videotour/videotour.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import {StatusPipe} from 'src/app/shared/status.pipe';
import { NewstatusPipe } from './newstatus.pipe'





@NgModule({
  declarations: [HomeComponent, VideotourComponent, EventsComponent, NewstatusPipe],
  imports: [
    CommonModule,RouterModule
  ],
  providers :[]
})
export class UserModule { }
