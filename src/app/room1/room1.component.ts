import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROOMIES } from '../roomies.mock';
import { Roomies } from '../roomies.model';

@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.css'],
})
export class Room1Component implements OnInit {

  roomies = ROOMIES;
  userInput = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  Searchroomies() {
    this.roomies = this.roomies.filter(element => {
      return JSON.stringify(element).includes(this.userInput);
    });
    console.log();
  }

  // Searchroomies(value:any) {
  //   this.roomies = this.roomies.filter(element => {
  //     return JSON.stringify(element).includes(this.userInput);
  //   });
  //   console.log(value);
  // }

  resetRoomies() {
    this.roomies =ROOMIES;
  }

  Addroomies(){
    this.router.navigateByUrl('/addroomies');
  }
}
