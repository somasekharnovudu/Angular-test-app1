import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navComp',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuitems=['home','services','contact'];
  constructor() { }

  ngOnInit() {
  }

}
