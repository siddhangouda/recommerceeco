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
  name;
  city;
  email;
  phone;
  company;
  designation;
  api =   'http://52.66.120.154:89'

  constructor(public activeModal : NgbActiveModal,
    private modalserve : NgbModal,
    private http: HttpClient) { 

      this.name = '';
      this.city = '';
      this.email = '';
      this.phone = '';
      this.company = '';
      this.designation = '';
    }

  ngOnInit(): void {

  
 

  }

  agendaDetailsLog(agendaValues : any){

this.http.post(this.api,  JSON.stringify(agendaValues))
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

  constructor(private modalserve : NgbModal,
             private route: ActivatedRoute,
             private restApi : RestApiService,
             ) { }

  ngOnInit() {

       // First get the product id from the current route.

      //  const routeParams = this.route.snapshot.paramMap;
       const eventIdFromroute = this.route.snapshot.paramMap.get("id")
     
       // Find the product that correspond with the id provided in route 
      
      //  return this.restApi.getEvents().subscribe((data: {}) => {
      //   this.events = data;
      //   console.log(this.events);
      //   console.log("eventIdFromroute" + eventIdFromroute);
      //   this.event = this.events.find(event => event.id == eventIdFromroute);
      //   console.log(this.event);
      //   })

        
      

}

  

  open(){
    this.modalserve.open(customer_details, {
      size: 'xl'
    })
  }

}





