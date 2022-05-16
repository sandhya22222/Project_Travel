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
    cabname:'Hyundai Xcent',
    checkin:'Free Cancellation',
    rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Dzire, Etios',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'400+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Toyota Etios',
     checkin:'Free Cancellation till 24hrs before checkin',
     rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Xylo, Ertiga',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'300+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Innova Crysta',
    checkin:'Free Cancellation till checkin',
    rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Indica, Swift',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'400+guests like you rated stay Very Good'
  },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.cabsL=data)
  }

}
