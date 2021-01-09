import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/shared/rest-api.service';
import {Events} from 'src/app/shared/events'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  events:any =[];
  event;
  // curEvent = this.events[this.event] ;

  constructor(private modalserve : NgbModal,
             private route: ActivatedRoute,
             private restApi : RestApiService) { }

  ngOnInit() {

       // First get the product id from the current route.

      //  const routeParams = this.route.snapshot.paramMap;
       const eventIdFromroute = this.route.snapshot.paramMap.get("id")
     
       // Find the product that correspond with the id provided in route 
      
       return this.restApi.getEvents().subscribe((data: {}) => {
        this.events = data;
        console.log(this.events);
        console.log("eventIdFromroute" + eventIdFromroute);
        this.event = this.events.find(event => event.id == eventIdFromroute);
        console.log(this.event);
        })

        
      

}

  

  open(){
    this.modalserve.open(customer_details, {
      size: 'xl'
    })
  }

}


@Component({
  selector :'customer_details',
  templateUrl: './customer_details.html',
  styleUrls: ['./register.component.css']
})

export class customer_details implements OnInit {

  constructor() { }

  ngOnInit(): void {

 

  }



}


