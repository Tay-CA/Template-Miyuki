import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-identidade-visual.servicos',
  templateUrl: './identidade-visual.servicos.component.html',
  styleUrls: ['./identidade-visual.servicos.component.css']
})
export class IdentidadeVisual implements OnInit {

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

  scrollToElement($element): void{
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
