import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public map: any = { lat: 51.678418, lng: 7.809007 };

}
