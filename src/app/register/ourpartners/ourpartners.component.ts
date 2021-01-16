import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
// import * as $ from "jquery";
// import * as $ from "jquery";

declare var $: any;
declare var require: any;

@Component({
  selector: 'app-ourpartners',
  templateUrl: './ourpartners.component.html',
  styleUrls: ['./ourpartners.component.css']
})

export class OurpartnersComponent implements OnInit{
  partners : any =[];
  // partners = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  responsiveOptions;
  myobj:any;
 
  
  constructor(private restApi: RestApiService) { 


    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '660px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  ngOnInit() {

      this.restApi.getEvents().subscribe((data) => {
       
      this.partners = data;
      this.myobj =  JSON.stringify(this.partners.eventlist[0].ongoing);
      // this.myobj = JSON.parse(this.partners);
      // console.log("check json data", this.partners.eventlist[0].ongoing[0]);
      console.log("sample text", this.myobj);  

      })

  }
  
}


