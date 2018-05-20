import { Component } from '@angular/core';
import Config from '../../config.json'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = Config.freeContent.title;

  constructor(private titleService: Title ) {

    this.setTitle(this.title);

  }

  setTitle( newTitle: string) {

    this.titleService.setTitle( newTitle );

  }
  
}
