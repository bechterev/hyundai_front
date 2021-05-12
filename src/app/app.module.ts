import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import  "moment";
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RangeCaledarComponent } from './components/rangeCalendar/range-caledar/range-caledar.component';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { StatisticComponent } from './components/static/statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    RangeCaledarComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
