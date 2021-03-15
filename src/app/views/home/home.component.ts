import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#1d1d1d');
  }

  ngOnInit() {
    $(".site-section").addClass("site-section-home");
    $(".site-section-home").removeClass("site-section");
    $(".site-wrap").addClass("site-wrap-home");
    $(".site-wrap-home").removeClass("site-wrap");
    $(".site-footer").hide();

  }
}
