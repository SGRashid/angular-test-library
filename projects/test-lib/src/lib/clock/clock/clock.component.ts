import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {


  now: Date;

  constructor() {
    this.now = new Date();
  }

  ngOnInit(): void {
  }

}
