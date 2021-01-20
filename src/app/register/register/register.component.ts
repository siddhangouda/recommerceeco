import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { HttpClient } from '@angular/common/http';





@Component({
  selector :'customer_details',
  templateUrl: './customer_details.html',
  styleUrls: ['./register.component.css'],
  
})

export class customer_details implements OnInit {
  fullname;
  company;
  email;
  mobileNumber;
  city;
  designation;
  api =   'http://52.66.120.154:89/insertContact';
  fname:any ="customerDetailsForm"

  constructor(public activeModal : NgbActiveModal,
    private modalserve : NgbModal,
    private http: HttpClient) { 

      this.fullname = '';
      this.city = '';
      this.email = '';
      this.mobileNumber = '';
      this.company = '';
      this.designation = '';
    }

  ngOnInit(): void {

  
 

  }

  agendaDetailsLog(agendaValues : any, fname:any){

// this.http.post(this.api,  JSON.stringify(agendaValues))
alert("data"+JSON.stringify(agendaValues,this.fname))
const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();

  }



}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  events:any =[];
  event;
  name: any;
  // curEvent = this.events[this.event] ;
  id  = {"event_id" :"3" }
  associationData :any= [];
  mediaData:any= [];
  partnersData:any =[];
  speakersData:any= [];
  supportedData :any= [];
  testimonialData :any= [];
  newarry : any;
  

  

  constructor(private modalserve : NgbModal,
             private route: ActivatedRoute,
             private restApi : RestApiService,
             
             ) { 

              
             }


             


  ngOnInit() {

       // First get the product id from the current route.

      //  const routeParams = this.route.snapshot.paramMap;
       const event_id1 = this.route.snapshot.paramMap.get("id")
     
       // Find the product that correspond with the id provided in route 
      
      return this.restApi.getEventsPost(this.id).subscribe((data: {}) => {
       this.events = data;
       this.associationData = this.events.eventlist.association;
       this.mediaData = this.events.eventlist.media;
       this.speakersData = this.events.eventlist.speakers;
       this.partnersData = this.events.eventlist.partners;
       this.supportedData = this.events.eventlist.supported;
       this.testimonialData = this.events.eventlist.testimonial;

      // this.partnersData = Object.entries(this.partnersData).map((e) => ( { [e[0]]: e[1] } ));
       
       console.log("event with id", this.speakersData);
      })


        
      

}

  

  open(){
    this.modalserve.open(customer_details, {
      size: 'xl'
    })
  }

}





