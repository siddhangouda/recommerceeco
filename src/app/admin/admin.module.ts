import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { AdminEventListComponent } from './admin-event-list/admin-event-list.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

// import { DataserviceService } from '../dataservice.service';












@NgModule({
  declarations: [AdminComponent, AdminEventListComponent],
  imports: [
    CommonModule,MatSliderModule,MatFormFieldModule,NgbModule,ReactiveFormsModule,MatSelectModule,
    MatInputModule,FormsModule,HttpClientModule,BrowserModule,MatDialogModule],
  exports :[MatSliderModule ],
  // providers :[DataserviceService]
})
export class AdminModule { }
