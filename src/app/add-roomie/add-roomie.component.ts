import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ROOMIES } from '../roomies.mock';

@Component({
  selector: 'app-add-roomie',
  templateUrl: './add-roomie.component.html',
  styleUrls: ['./add-roomie.component.css']
})
export class AddRoomieComponent implements OnInit {
  roomies = ROOMIES;
  addNewRoomie =new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfEntry: new FormControl(''),
    roomRent: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.roomies.push(this.addNewRoomie);

  }

}
