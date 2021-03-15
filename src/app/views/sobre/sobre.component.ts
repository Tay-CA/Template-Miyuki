import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  isMobile: boolean;
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#dddcdd');
  }

  ngOnInit() {
    $(".site-section-home").addClass("site-section");
    $(".site-section").removeClass("site-section-home");
    $(".site-wrap-home").addClass("site-wrap");
    $(".site-wrap").removeClass("site-wrap-home");
    $(".site-footer").show();

    window.addEventListener("resize", (event) => this.detectmob());
    
    this.detectmob();
  }

  public detectmob() {
    if(window.innerWidth <= 800 && window.innerHeight <= 600){
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }


}
