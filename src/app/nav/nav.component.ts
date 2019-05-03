import { Component, OnInit } from '@angular/core'
import { Navigation } from 'selenium-webdriver'
import { StoreService } from '../store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'Destined'
  hamburgerMenu: boolean = false
  navigation: Array<any>
  // currentDay: any = new Date()
  // navigation = [
  //   {
  //     name: 'HOME',
  //     url: '/',
  //     show: false,
  //     options: [{ name: 'FEATURES', url: '/' }, { name: 'CONTACT', url: '/' }]
  //   },
  //   {
  //     name: 'PLANNER',
  //     url: '/planner',
  //     show: false,
  //     options: [
  //       { name: 'DAY', url: `/planner/day/${this.currentDay}` },
  //       { name: 'UPCOMING', url: '/upcoming' }
  //     ]
  //   },
  //   {
  //     name: 'ABOUT',
  //     url: '/about',
  //     show: false,
  //     options: [{ name: 'MISSION', url: '/' }, { name: 'CREATOR', url: '/' }]
  //   }
  // ]
  //   <!-- each navigation option have a drop down to take you to different sections of page/ display different options -->
  // <!-- home: home, features, contact -->
  // <!-- Planner: week(will have the week and 3 soonest upcoming events with a click to see all), day, upcoming events (include option for linking to google calendar) -->
  // <!-- about: mission statement, contact, creator -->
  constructor(private data: StoreService) {}

  ngOnInit() {
    this.navigation = this.data.navigation
  }

  _hamburgerMenu = () => {
    this.hamburgerMenu = !this.hamburgerMenu
    if (!this.hamburgerMenu) {
      for (let i = 0; i < this.data.navigation.length; i++) {
        this.data.navigation[i].show = false
      }
    }
  }
  _showOptions = e => {
    e.show = !e.show
  }
}
