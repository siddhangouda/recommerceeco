import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-mediapartners',
  templateUrl: './mediapartners.component.html',
  styleUrls: ['./mediapartners.component.css']
})
export class MediapartnersComponent implements OnInit {

  responsiveOptions;
  @Input() cmediaData:any[];

  constructor() {

    
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
   

  ngOnInit(): void {

    
  }

}
