import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { RestApiService} from 'src/app/shared/rest-api.service'
import { Events } from 'src/app/shared/events'
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
 

})
export class EventsComponent implements OnInit {
  
  events : any =[];
  event : any;
  selected: String ;
  event_head :string = "Our Events";
  
  constructor(public restApi : RestApiService,
  private dialog : MatDialog,) { }

ngOnInit(): any {


return this.restApi.getEvents().subscribe((data: {}) => {
this.events = data;

if(data){
  console.log("data loaded")
}

console.log(this.events);
})


}

active ():void {
  this.selected = "ongoining"; 
  this.event_head = "Active Events"
  console.log(this.selected);
}

upcoming ():void {
  this.selected = "ongoining"; 
  this.event_head = "Upcoming Events"
  console.log(this.selected);
}

completed ():void {
  this.selected = "comleted"; 
  this.event_head = "Completed Events"
  console.log(this.selected);
}

}




