import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('carouselSlide', { read: ElementRef }) carouselSlide: ElementRef
  displayedImage: String
  carouselStyleBool: boolean = false
  carouselNumber: number = 0
  size: number

  constructor() {}

  ngOnInit() {
    this.size = this.carouselSlide.nativeElement.clientWidth
  }

  nextImage = n => {
    // this.carouselSlide.nativeElement.style.transform = 'translateX(' +(-this.size * this.carouselNumber)'px)'
    this.carouselStyleBool = true

    this.carouselNumber = this.carouselNumber + parseInt(n)
  }
}
