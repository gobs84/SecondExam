import { Component, OnInit } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-cards',
  templateUrl: '../../../build/pageOne.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  users: any[];
  length: number;

  constructor() {
}

  ngOnInit() {
    this.users = data.users;
    this.length = this.users.length;
    for(var i=0; i<this.length;i++){  
      if(this.users[i].avatar_url == "") {
        this.users[i].avatar_url = "http://lightbox.vc/assets/admin/images/users/avatar-1.jpeg";
      }
    }
  }

}
