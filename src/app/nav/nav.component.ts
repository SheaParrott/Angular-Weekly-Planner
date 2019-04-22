import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'Destined'
  hamburgerMenu: boolean = false
  navigation = [
    {
      name: 'HOME',
      url: '/',
      options: [{ name: 'FEATURES', url: '/' }, { name: 'CONTACT', url: '/' }]
    },
    {
      name: 'PLANNER',
      url: '/planner',
      options: [
        { name: 'DAY', url: '/planner' },
        { name: 'UPCOMING', url: '/upcoming' }
      ]
    },
    {
      name: 'ABOUT',
      url: '/about',
      options: [{ name: 'MISSION', url: '/' }, { name: 'CREATOR', url: '/' }]
    }
  ]
  //   <!-- each navigation option have a drop down to take you to different sections of page/ display different options -->
  // <!-- home: home, features, contact -->
  // <!-- Planner: week(will have the week and 3 soonest upcoming events with a click to see all), day, upcoming events (include option for linking to google calendar) -->
  // <!-- about: mission statement, contact, creator -->
  constructor() {}

  ngOnInit() {}

  _hamburgerMenu = () => {
    this.hamburgerMenu = !this.hamburgerMenu
  }
}
