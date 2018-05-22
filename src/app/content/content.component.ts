import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: '../../../build/pageTwo.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public bodyContent = 'Some Cool Stuff';
  title = 'Page Two Title';

  constructor(private titleService: Title ) {

    this.setTitle(this.title);

  }

  setTitle( newTitle: string) {

    this.titleService.setTitle( newTitle );

  }

  ngOnInit() {
  }

}
