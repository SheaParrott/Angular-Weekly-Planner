import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input('Day') Day: any
  Time: Array<any> = [
    '12am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm'
  ]
  Week: Array<any>
  constructor(private route: ActivatedRoute) {
    console.log()
    if (window.location.pathname.includes('/planner/day/')) {
      console.log('got it! ')
      let d = new Date(this.route.snapshot.paramMap.get('date'))
      console.log(d)
      this.Day = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
    }
  }

  ngOnInit() {
    console.log()
    console.log(this.Day)
  }
}
