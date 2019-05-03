import { Component, OnInit } from '@angular/core'
import { StoreService } from '../store.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  navigation: Array<any>
  constructor(private data: StoreService) {}

  ngOnInit() {
    this.navigation = this.data.navigation
  }
}
