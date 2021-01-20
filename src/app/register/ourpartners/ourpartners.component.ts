import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
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
  employeeDetails = { event_id: ''}
  @Input() cpartnerData: any;
  newdata;
 
  
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

      // console.log("partner details", this.cpartnerData);
      // this.newdata = Object.entries(this.cpartnerData).map((e) => ( { [e[0]]: e[1] } ));
      // console.log(typeof(this.cpartnerData))

      

  }
  
}


