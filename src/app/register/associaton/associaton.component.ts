import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-associaton',
  templateUrl: './associaton.component.html',
  styleUrls: ['./associaton.component.css']
})
export class AssociatonComponent implements OnInit {
  responsiveOptions;

  @Input() cassociationData:any[];

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
