import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Moment } from 'moment';
let baseUrl = "http://localhost:3002/";
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getList(entity:string){
    //if(entity=="reservationall")
   
    return this.http.get(baseUrl + 'res/' + entity);
    
  }
  addReservation(data:{date:any[],room:number, hotel:number}){
    return this.http.post(baseUrl+'res/addreservation',{data:data})
  }
  getListSearch(entity:string,id:number){
    return this.http.get(baseUrl+'res/' + entity+`/${id}`)
  }
  getFreeRoom(selectHotel: number,date:{start_date:any, stop_date:any}){
    console.log(date)
    return this.http.post(baseUrl+'res/freeroom',{hotelId: selectHotel,date:date})
  }
  getStatistic(data:{start_date:any,stop_date:any}){
    console.log(this.http.post(baseUrl+'res/statistic',data))
    return this.http.post(baseUrl+'res/statistic',data);
  }
}
