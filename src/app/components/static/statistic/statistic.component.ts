import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  start: any;
  stop: any;
  query: Array<{days: number,  hotel: string, mon: string, value_number: number}>
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  dateSelected(value: any) {

    this.start = moment(value.startDate);
    this.stop = moment(value.endDate);
    this.api.getStatistic({start_date:this.start,stop_date:this.stop}).subscribe((data:any)=>{
      this.query = data;
    })
  }

}
