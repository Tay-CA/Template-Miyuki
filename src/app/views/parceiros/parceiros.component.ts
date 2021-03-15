import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#1d1d1d');
  }

  ngOnInit() {
    $(".site-section-home").addClass("site-section");
    $(".site-section").removeClass("site-section-home");
    $(".site-wrap-home").addClass("site-wrap");
    $(".site-wrap").removeClass("site-wrap-home");
    $(".site-footer").show();
  }

}
