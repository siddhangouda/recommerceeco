import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { UserModule } from './user/user.module';
import { RegisterModule } from './register/register.module';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { StatusPipe } from './shared/status.pipe';




@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AdminModule,
    BrowserAnimationsModule, 
    NgbModule, 
    MatSliderModule, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    AccordionModule,
    UserModule,
    RegisterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule,StatusPipe]
})
export class AppModule { }
