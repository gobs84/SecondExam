import { Component, OnInit } from '@angular/core';
import Config from '../../../config.json'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  hidden = Config.enablePageTwoLink;

  constructor() { }

  ngOnInit() {
  }

}
