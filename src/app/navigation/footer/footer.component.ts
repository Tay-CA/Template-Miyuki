import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
mobile: boolean = false

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 411) {
      this.mobile = true
    }
  }

}
