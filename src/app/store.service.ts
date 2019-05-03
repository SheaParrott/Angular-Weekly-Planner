import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  hours: Array<number>
  months: [
    { number: 0; name: 'January'; days: 31 },
    { number: 1; name: 'February'; days: 28 },
    { number: 2; name: 'March'; days: 31 },
    { number: 3; name: 'April'; days: 30 },
    { number: 4; name: 'May'; days: 31 },
    { number: 5; name: 'June'; days: 30 },
    { number: 6; name: 'July'; days: 31 },
    { number: 7; name: 'August'; days: 31 },
    { number: 8; name: 'September'; days: 30 },
    { number: 9; name: 'October'; days: 31 },
    { number: 10; name: 'November'; days: 30 },
    { number: 11; name: 'December'; days: 31 }
  ]
  currentDay: any = new Date()
  navigation = [
    {
      name: 'HOME',
      url: '/',
      show: false,
      options: [{ name: 'FEATURES', url: '/' }, { name: 'CONTACT', url: '/' }]
    },
    {
      name: 'PLANNER',
      url: '/planner',
      show: false,
      options: [
        { name: 'DAY', url: `/planner/day/${this.currentDay}` },
        { name: 'UPCOMING', url: '/upcoming' }
      ]
    },
    {
      name: 'ABOUT',
      url: '/about',
      show: false,
      options: [{ name: 'MISSION', url: '/' }, { name: 'CREATOR', url: '/' }]
    }
  ]

  constructor() {}

  createHoursArray = () => {
    let array = []
    for (let i = 1; i <= 25; i++) {
      array.push(i)
    }
    this.hours = array
  }
}
