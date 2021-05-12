import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './components/reservation/reservation.component';
import { StatisticComponent } from './components/static/statistic/statistic.component';


const routes: Routes = [
  { path: 'reservation', component: ReservationComponent},
  {path:'static',component:StatisticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
