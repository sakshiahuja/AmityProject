import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event3',
  templateUrl: './event3.component.html',
  styleUrls: ['./event3.component.css']
})
export class Event3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public map: any = { lat: 51.678418, lng: 7.809007 };

}
