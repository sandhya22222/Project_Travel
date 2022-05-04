import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flightclick',
  templateUrl: './flightclick.component.html',
  styleUrls: ['./flightclick.component.css']
})
export class FlightclickComponent implements OnInit {

  //  passengers:number =2
   @ViewChild('passengers') nameKey!: ElementRef

  public plist: number =5

   ticketPrize: number = 1000;
  
  // public passengers:number |any;
 
  

constructor() { }

  ngOnInit(): void {
  }
  getValues() {

  }
  getAmount() {
    // alert("Amount to be paid")
    sessionStorage.setItem("passengers", this.nameKey.nativeElement.value)
  }
  amount: number = this.ticketPrize * this.plist;
 
  // setValues() {
  //   this.plist = sessionStorage.getItem("plist")
  // }

 


}
