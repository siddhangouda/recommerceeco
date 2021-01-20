import { Component, OnInit } from '@angular/core';
import { RestApiService} from 'src/app/shared/rest-api.service'
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
  upcomig: any;
  completed1: any;
  ongoing: any;
 

  
  constructor(public restApi : RestApiService,
  private dialog : MatDialog,) { }

ngOnInit():  any {


return this.restApi.getEvents().subscribe((data: {}) => {
this.events = data;
this.upcomig = this.events.eventlist[0].upcoming;
this.ongoing = this.events.eventlist[0].ongoing;
this.completed1 = this.events.eventlist[0].completed;
this.events = this.upcomig.concat(this.completed1,this.ongoing);
if(data){
  console.log("data loaded")
}

console.log(this.events);
})


}

active ():any {
  return this.restApi.getEvents().subscribe((data: {}) => {
  this.events = data;
  this.events = this.events.eventlist[0].ongoing;
  console.log(this.events);
})
}


upcoming ():any {
  return this.restApi.getEvents().subscribe((data: {}) => {
    this.events = data;
    this.events = this.events.eventlist[0].upcoming;
    console.log(this.events);
  })
}

completed ():any {
  return this.restApi.getEvents().subscribe((data: {}) => {
    this.events = data;
    this.events = this.events.eventlist[0].completed;
    console.log(this.events);
  })

}
}




