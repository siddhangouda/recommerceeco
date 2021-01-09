import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {from, observable , throwError} from 'rxjs';

import { RestApiService} from 'src/app/shared/rest-api.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers :[RestApiService]
})
export class AdminComponent implements OnInit {
// form data
  eventForm = new FormGroup({
    
    id : new FormControl('',[Validators.required]),
    name : new FormControl('',[Validators.required]),
    startDate : new FormControl('',[Validators.required]),
    endDate : new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]),
    registrationCharge : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.minLength(3),]),
    registrationTax : new FormControl(' ',[Validators.required]),
    description : new FormControl(''),
    fileUpload : new FormControl(''),
    registrationTotal: new FormControl('',[Validators.required])
  })

  isCollapsed : boolean = true;
  endDate: NgbDateStruct;
  startDate: NgbDateStruct;
  date: { year: number, month: number };
  registrationCharge :number =1 ;
  registrationTax : number = 18;
  total = this.registrationCharge + this.registrationTax;

  // constructor
  
  constructor(formBuilder: FormBuilder, private calendar: NgbCalendar,
               private httpClient : HttpClient,
               public router : Router,
               public restApi : RestApiService ) { }

  ngOnInit() {
    
  }

  // selct today.
selectToday() {
  this.endDate = this.calendar.getToday();
  this.startDate = this.calendar.getToday();
}



onSubmit() {
  
    this.restApi.createEvent(this.eventForm.value).subscribe((data: any) => {
      this.router.navigate(['/EventList'])
    })
  }


  
  
    // if(this.eventForm.valid){

    //   this.httpClient.post('http://localhost:3000/EventList', this.eventForm.value)
    //   .subscribe((response)=>{
    //   alert("data submitted successfully");
    //   this.eventForm.reset;
    //   })
    // }



    // this.httpService.addEventdata(this.eventForm.value);
    
    // alert("data submitted successfully");
    // }


  }
  







