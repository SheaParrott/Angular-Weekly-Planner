import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('carouselSlide', { read: ElementRef }) carouselSlide: ElementRef
  displayedImage: String
  carouselImages: Array<any> = [
    { src: '../../assets/calendar.jpg' },
    { src: '../../assets/calendar.jpg' },
    { src: '../../assets/calendar.jpg' },
    { src: '../../assets/calendar.jpg' },
    { src: '../../assets/calendar.jpg' },
    { src: '../../assets/calendar.jpg' }
  ]
  carouselStyleBool: boolean = false
  carouselNumber: number = 1
  carouselSize: number

  constructor() {}

  ngOnInit() {}

  nextImage = n => {
    this.carouselSize = this.carouselSlide.nativeElement.clientWidth
    // this.carouselSlide.nativeElement.style.transform = 'translateX(' +(-this.size * this.carouselNumber)'px)'
    this.carouselStyleBool = true

    this.carouselNumber = this.carouselNumber + parseInt(n)
  }
}
