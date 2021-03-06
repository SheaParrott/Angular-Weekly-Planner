import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { WeekComponent } from './week/week.component'
import { AboutComponent } from './about/about.component'
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component'
import { DayComponent } from './day/day.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'planner', component: WeekComponent },
  { path: 'upcoming', component: UpComingEventsComponent },
  { path: 'planner/day/:date', component: DayComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
