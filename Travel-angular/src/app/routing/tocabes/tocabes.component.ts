import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tocabes',
  templateUrl: './tocabes.component.html',
  styleUrls: ['./tocabes.component.css']
})
export class TocabesComponent implements OnInit {
  cabsL: any;

  hotellist = [{
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    hotelname:'FOUR SEASON HOTEL',
    checkin:'Free Cancellation',
    rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    hotelname:'SVENSKA DESIGN HOTEL',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'400+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
     hotelname:'HOTEL SUBA INTERNATIONAL',
     checkin:'Free Cancellation till 24hrs before checkin',
     rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    hotelname:'THE OBEROI HOTEL',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'300+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    hotelname:'THE TAJ MAHAL PALACE',
    checkin:'Free Cancellation till checkin',
    rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    hotelname:'HOTEL GODWIN',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'400+guests like you rated stay Very Good'
  },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.cabsL=data)
  }

}
