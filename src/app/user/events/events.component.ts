import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { RestApiService} from 'src/app/shared/rest-api.service'
import { Events } from 'src/app/shared/events'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public restApi : RestApiService,
    private dialog : MatDialog,) { }

events : any =[];
event : any;

ngOnInit(): any {


return this.restApi.getEvents().subscribe((data: {}) => {
this.events = data;
console.log(this.events);
})


}

}


