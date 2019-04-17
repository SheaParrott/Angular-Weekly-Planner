import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'Destined'
  navigation = ['HOME', 'PLANNER', 'UPCOMING', 'ABOUT']
  constructor() {}

  ngOnInit() {}
}
