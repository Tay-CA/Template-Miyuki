import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $('.mat-drawer-inner-container').addClass('bg-custom-gray');
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onToggleSidenav = () => {
    this.sidenavClose.emit();
  }


}
