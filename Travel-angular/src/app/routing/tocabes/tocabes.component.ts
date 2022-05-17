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
    facilities:'Sedan  |   AC |   4 Seats',
    text:'Spacious economical car with MySafety promise',
    checkin:'Free Cancellation,Within 30min of Booking',
    rating:'Best Price Guaranteed else get 5X difference'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Dzire, Etios',
    facilities:'Sedan  |   AC |   4 Seats',
    text:'Spacious car with MySafety promise',
    checkin:'Free Cancellation, till 1 hour of departure',
    rating:'Best Price Guaranteed else get 5X difference'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Toyota Etios',
    facilities:'Sedan  |   AC |   4 Seats',
    text:'Spacious car with MySafety promise',
     checkin:'Free Cancellation,Within 30min of Booking',
     rating:'Best Price Guaranteed else get 5X difference '
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Xylo, Ertiga',
    facilities:'Sedan  |   AC |   4 Seats',
    text:'Spacious car with MySafety promise',
    checkin:'Free Cancellation, till 1 hour of departure',
    rating:'Best Price Guaranteed else get 5X difference'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Innova Crysta',
    facilities:'Sedan  |   AC |   4 Seats',
    text:'Spacious car with MySafety promise',
    checkin:'Free Cancellation,Within 30min of Booking',
    rating:'Best Price Guaranteed else get 5X difference'
  },
  {
    img: 'https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan_new.png',
    cabname:'Indica, Swift',
    facilities:'Sedan  |   AC |   4 Seats',
    text:'Spacious car with MySafety promise',
    checkin:'Free Cancellation, till 1 hour of departure',
    rating:'Best Price Guaranteed else get 5X difference'
  },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.cabsL=data)
  }

}
