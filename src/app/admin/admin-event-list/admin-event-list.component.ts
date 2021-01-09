import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { RestApiService} from 'src/app/shared/rest-api.service'
import { Events } from 'src/app/shared/events'
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-admin-event-list',
  templateUrl: './admin-event-list.component.html',
  styleUrls: ['./admin-event-list.component.css']
})
export class AdminEventListComponent implements OnInit {

  constructor(public restApi : RestApiService,
              private dialog : MatDialog) { }

  events : any =[];
    event : any;

  ngOnInit(): any {
    

    return this.restApi.getEvents().subscribe((data: {}) => {
      this.events = data;
      console.log(this.events);
    })

    
  }

  

  // Get employees list
  deleteEvent(event) {
    this.restApi.deleteEvent(event.id).subscribe(data => {
      this.events = this.events.filter(u => u !== event);
      console.log(data);
    }) 

  }


  openEditForm(){
    const dialogRef = this.dialog.open(editEvent);
  }

  


  

 

}

@Component ({
  selector: 'editEvent',
  templateUrl : 'editEvent.html',
  })
  
  export class editEvent {
  
  }
