import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tohotels',
  templateUrl: './tohotels.component.html',
  styleUrls: ['./tohotels.component.css']
})
export class TohotelsComponent implements OnInit {
  hotellist = [{
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  },
  {
    img: 'https://r1imghtlak.mmtcdn.com/11dd3b802fe811eba4e60242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=webp'
  }
  ]

  HotelL: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.HotelL = data)
  }

}
