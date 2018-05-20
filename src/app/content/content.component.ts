import { Component, OnInit } from '@angular/core';
import Config from '../../../config.json'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public bodyContent = Config.freeContent.body;

  constructor() { }

  ngOnInit() {
  }

}
