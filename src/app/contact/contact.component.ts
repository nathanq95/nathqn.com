import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  defaultElevation = 5;
  raisedElevation = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
