import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  show: boolean = true;
  usersArray = [
    {
      "name": "Sairaj",
      "age": "28"
    },
    {
      "name": "Neha",
      "age": "25"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show
  }

}
