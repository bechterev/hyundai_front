import { Component, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})


export class ReservationComponent implements OnInit {
  start: Moment;
  stop: Moment;
  hotels: any[] =[{name:'none'}];
  rooms: any[] = [];
  selectedHotel:any;


  reservation : any[] =[];
  constructor(private api: ApiService) { console.log('res')}

  ngOnInit(): void {
    this.getReservations();
    this.getHotels();
  }
 
  getReservations(){
    this.api.getList('reservationall').subscribe(data=>{
      this.reservation = <any[]>data
    })
  }
  getDate(d:string):string{
    return moment(d, 'YYYY-MM-DD').format('DD.MM.YYYY');
  }
  dateSelected(value: any) {

    this.start = moment(value.startDate);
    this.stop = moment(value.endDate);
    console.log(value)
  }

 
  update(){
    this.api.getFreeRoom(this.selectedHotel,{start_date:this.start,stop_date:this.stop}).subscribe((data:any)=>{
      this.rooms=data;
      
    });
  }
  getHotels(){
    this.api.getList('hotelsall').subscribe(data=>{
      this.hotels = [...this.hotels,...<any[]>data];
    })
  }
  selectHotel(event:Event){
    this.selectedHotel = this.hotels.find(x=>x.name==(event.target as HTMLTextAreaElement).value);
    
  }
  getRooms(){
    this.api.getListSearch('roomsall',parseInt(this.selectedHotel.id)).subscribe(data=>{
      this.rooms = <any[]>data;
    })
  }
  addReservation(room:any){
    this.api.addReservation({date:[this.start,this.stop],room:room.id, hotel:this.selectedHotel}).subscribe(data=>{
      console.log('success add reservation')
    })
  }
}
