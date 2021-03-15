import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-social-media.servicos',
  templateUrl: './social-media.servicos.component.html',
  styleUrls: ['./social-media.servicos.component.css']
})
export class SocialMedia implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#dddcdd');
  }

  ngOnInit() {
    $(".site-section-home").addClass("site-section");
    $(".site-section").removeClass("site-section-home");
    $(".site-wrap-home").addClass("site-wrap");
    $(".site-wrap").removeClass("site-wrap-home");
    $(".site-footer").show();
  }

}
