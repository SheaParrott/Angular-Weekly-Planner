import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  Week: Array<any> = [
    '4/2/19',
    '4/3/19',
    '4/4/19',
    '4/5/19',
    '4/6/19',
    '4/7/19',
    '4/8/19'
  ]
  constructor() {}

  ngOnInit() {}
}
