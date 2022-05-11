import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busclick',
  templateUrl: './busclick.component.html',
  styleUrls: ['./busclick.component.css']
})
export class BusclickComponent implements OnInit {
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 999;

  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
     alert("Payment done successfully")
  }
  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }
}

