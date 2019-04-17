import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'Destined'
  navigation = [
    { name: 'HOME', url: '/', options: [] },
    { name: 'PLANNER', url: '/planner', options: [] },
    { name: 'UPCOMING', url: '/upcoming', options: [] },
    { name: 'ABOUT', url: '/about', options: [] }
  ]
  constructor() {}

  ngOnInit() {}
}
