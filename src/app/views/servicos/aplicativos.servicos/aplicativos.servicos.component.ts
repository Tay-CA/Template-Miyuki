import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-aplicativos.servicos',
  templateUrl: './aplicativos.servicos.component.html',
  styleUrls: ['./aplicativos.servicos.component.css']
})
export class Aplicativos implements OnInit {

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
