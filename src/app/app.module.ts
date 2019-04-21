import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { TimeCellComponent } from './time-cell/time-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeekComponent,
    DayComponent,
    UpComingEventsComponent,
    AboutComponent,
    NavComponent,
    TimeCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
