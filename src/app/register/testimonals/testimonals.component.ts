import { Component, Input, OnInit } from '@angular/core';
declare var jQuery: any;



@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css'],
})
export class TestimonalsComponent implements OnInit {

  @Input() ctestimonialData: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
