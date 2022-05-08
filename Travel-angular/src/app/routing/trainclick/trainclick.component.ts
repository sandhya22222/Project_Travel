import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainclick',
  templateUrl: './trainclick.component.html',
  styleUrls: ['./trainclick.component.css']
})
export class TrainclickComponent implements OnInit {
  // trainL: any;
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 500;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((data) => this.trainL = data)
  } getValues() {
    alert("Payment done successfully")
 }
 getAmount() {

   this.isGetAmtClicked = true;

   this.calculateAmount = this.passengers * this.ticketPrize
 }

}
