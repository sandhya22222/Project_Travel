import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tohotels',
  templateUrl: './tohotels.component.html',
  styleUrls: ['./tohotels.component.css']
})
export class TohotelsComponent implements OnInit {
  hotellist = [{
    img: 'https://r1imghtlak.mmtcdn.com/91091b3ee33811e9a3130242ac110003.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp',
    hotelname:'FOUR SEASON HOTEL',
    checkin:'Free Cancellation',
    rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/4b0c9f2a709911e7add5025f77df004f.jpg?&output-quality=75&downsize=243:162&output-format=webp',
    hotelname:'SVENSKA DESIGN HOTEL',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'400+guests like you rated stay Very Good'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/7a697c646db211e7aa7f0a4cef95d023.jpg?&output-quality=75&downsize=243:162&output-format=webp',
     hotelname:'HOTEL SUBA INTERNATIONAL',
     checkin:'Free Cancellation till 24hrs before checkin',
     rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/89d4ecde9a1e11e4aab032e76f7e45c9.jfif?&output-quality=75&downsize=243:162&crop=243:162;40,0&output-format=webp',
    hotelname:'THE OBEROI HOTEL',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'300+guests like you rated stay Very Good'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/c283c8e459af11e8b5860a9df65c8753.jpg?&output-quality=75&downsize=243:162&output-format=webp',
    hotelname:'THE TAJ MAHAL PALACE',
    checkin:'Free Cancellation till checkin',
    rating:'500+guests like you rated stay Very Good'
  },
  {
    img: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701101227074979-1b72892a8c4211e9898a0242ac110003.jpg?&output-quality=75&downsize=243:162&crop=243:162;22,0&output-format=webp',
    hotelname:'HOTEL GODWIN',
    checkin:'Free Cancellation till 24hrs before checkin',
    rating:'400+guests like you rated stay Very Good'
  },
  ]

  HotelL: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.HotelL = data)
  }

}
