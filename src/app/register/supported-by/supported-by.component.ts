import { Component, OnInit ,Input } from '@angular/core';



@Component({
  selector: 'app-supported-by',
  templateUrl: './supported-by.component.html',
  styleUrls: ['./supported-by.component.css'],
  
})
export class SupportedByComponent implements OnInit {
  @Input() csupportedData :any[];
  responsiveOptions;

  
  constructor() { }

  ngOnInit(): void {

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
 

}
