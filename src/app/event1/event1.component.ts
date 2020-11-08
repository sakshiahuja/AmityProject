import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public map: any = { lat: 51.678418, lng: 7.809007 };

}
