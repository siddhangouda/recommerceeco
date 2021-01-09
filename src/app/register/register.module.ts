import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SupportedByComponent } from './supported-by/supported-by.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';
import { MediapartnersComponent } from './mediapartners/mediapartners.component';
import { AssociatonComponent } from './associaton/associaton.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { FooterComponent } from './footer/footer.component';
import { customer_details } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [RegisterComponent, SupportedByComponent, OurpartnersComponent, MediapartnersComponent, AssociatonComponent, SpeakersComponent, TestimonalsComponent, FooterComponent, customer_details],
  imports: [
    CommonModule,FormsModule,NgbModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    ]
})
export class RegisterModule { }
