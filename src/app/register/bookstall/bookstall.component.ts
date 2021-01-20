import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookstall',
  templateUrl: './bookstall.component.html',
  styleUrls: ['./bookstall.component.css']
})
export class BookstallComponent implements OnInit {
  
// value for form  selection
  radioValue:string ="Partnership";
  name:string;
 
  

  constructor() { 

   this.name ='';
  }

  ngOnInit(): void {
  }

  partnershipLog(value: any){
    alert("form submitted"+ JSON.stringify(value) );
  }

  exhibitorLog(value: any){
    alert("form submitted"+ JSON.stringify(value) );
  }

  conferenceLog(value: any){
    alert("form submitted"+ JSON.stringify(value) );
  }

  visitorLog(value: any){
    alert("form submitted"+ JSON.stringify(value) );
  }

}
