import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flightclick',
  templateUrl: './flightclick.component.html',
  styleUrls: ['./flightclick.component.css']
})
export class FlightclickComponent implements OnInit {
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 1000;

  constructor() { }

  ngOnInit(): void {
  }
  getValues() {

  }
  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }
}
