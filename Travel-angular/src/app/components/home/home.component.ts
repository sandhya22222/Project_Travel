import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listItem = [{
    text:'Valid till:Valid Till 12th June',
    content: 'Get up to Rs. 7500 OFF on  Europe  Flights',
    btnText: 'Book Now!',
    image: 'https://gos3.ibcdn.com/top-band-1649346190.jpg',
   href:'/flights/search?from=New%20Delhi&to=Goa'
  },
  {
    text:'Valid till:Valid Till 12th July',
    content: 'New Flights: Port Blair, Kolkata and Chennai ',
    btnText: 'Book Now!',
    image: 'https://gos3.ibcdn.com/offers-640X268-1646049604.jpg',
   href:'/flights/search?from=Mumbai&to=Chennai'
  },
  {
    text:'Valid till:Valid Till 31th June',
    content: 'Up to Rs.5000 OFF + Extra Rs. 5000 OFF* with leading banks.',
    btnText: 'Book Now!',
    image: 'https://gos3.ibcdn.com/offers-1648917885.jpg',
    href:'/flights/search?from=New%20Delhi&to=Goa'

  },
  {
    text:'Valid till:Valid Till 15th July',
    content: 'Up To 25% OFF on Select Int’l Flights',
    btnText: 'Book Now!',
    image: 'https://gos3.ibcdn.com/offers-640X268-1649058606.jpg',
    href:'/flights/search?from=New%20Delhi&to=Goa'

  },
  ];
  bestPlaces=[{
        title:'London',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3198/london2.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
      {
        title:'Greece',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1112/Best%20of%20Greece.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
      {
        title:'Paris',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Paris012.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
      {
        title:'New York',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3665/New-York.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
     
      ];
      bestPlaces1=[{
        title:'Amsterdam',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2145/Canal-in-Amsterdam.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
      {
        title:'Maldives',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Medhufushi%20Resort.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
      {
        title:'Bangkok',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/Bangkok8.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
      {
        title:'Dubai',
        image:'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/comic-con-festival.jpg?crop=370:240&downsize=370:240',
        btnText:'Visit Now'
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
