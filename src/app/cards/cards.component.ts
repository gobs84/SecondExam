import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: '../../../build/pageOne.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  data: any;
  users: any[];
  length: number;

  constructor() {
}

  ngOnInit() {
    this.data = {"users":[{"avatar_url":"https://avatars1.githubusercontent.com/u/9919?s=200&v=4","github_url":"https://github.com/github","name":"GitHub Repositories","nickName":"GitHub"},{"avatar_url":"","github_url":"https://avatars1.githubusercontent.com/u/30177?s=200&v=4","name":"Android Open Source","nickName":"Android"},{"avatar_url":"https://avatars3.githubusercontent.com/u/18133?s=200&v=4","github_url":"https://github.com/git","name":"GIT SCM","nickName":"git"},{"avatar_url":"https://avatars0.githubusercontent.com/u/1630826?s=200&v=4","github_url":"https://github.com/gruntjs","name":"GRUNT","nickName":"GRUNT.js"},{"avatar_url":"https://avatars1.githubusercontent.com/u/1562726?s=200&v=4","github_url":"https://github.com/d3","name":"Data Driven Documents","nickName":"D3.js"}]};
    this.users = this.data.users;
    this.length = this.users.length;
    for(var i=0; i<this.length;i++){  
      if(this.users[i].avatar_url == "") {
        this.users[i].avatar_url = "http://lightbox.vc/assets/admin/images/users/avatar-1.jpeg";
      }
    }
  }

}
