import { Component, OnInit } from '@angular/core';
import Config from '<%=configFilePath%>'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: '<%=htmlPath2%>',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public bodyContent = Config.freeContent.body;
  title = Config.freeContent.title;

  constructor(private titleService: Title ) {

    this.setTitle(this.title);

  }

  setTitle( newTitle: string) {

    this.titleService.setTitle( newTitle );

  }

  ngOnInit() {
  }

}
