import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tobuses',
  templateUrl: './tobuses.component.html',
  styleUrls: ['./tobuses.component.css']
})
export class TobusesComponent implements OnInit {

  buses=[
    {
      busname: 'ZingBus',
      pline: 'Bharat Benz Full Air Suspension AC Sleeper (2+1) | 22 Seats Lest | 15 Windows Seats',
      fromtime: '22:00, 1 MAY',
      totime: '05:40, 2 MAY',
      way: '7 hrs 40 mins',
      track: 'Live Tracking',
      bcost: 'RS.805/-',
      start: 'Starting From',
      btnText:'book now'
     
    },

    {
      busname: 'IntrCity SmartBus',
      pline: 'Bharat Benz AC Sleeper (2+1) | 30 Seats Lest | 18 Windows Seats',
      fromtime: '22:45, 25 MAY',
      totime: '06:00, 26 MAY',
      way: '7 hrs 15 mins',
      track: 'Live Tracking',
      free : 'Free Collection*',
      bcost: 'RS.823/-',
      start: 'Starting From',
      
    },
    {
      busname: 'Raj Kalpana travels pvt.ltd',
      pline: 'AC Sleeper (2+1) | 30 Seats Lest | 20 Windows Seats',
      fromtime: '21:00, 25 MAY',
      totime: '05:25, 26 MAY',
      way: '8 hrs 30 mins',
      track: 'Live Tracking',
      bcost: 'RS.999/-',
      start: 'Starting From',
      
    },
    {
      busname: 'Klapana Travels Kanpur',
      pline: 'Klapana Travels Full Air Suspension AC Sleeper (2+1) | 32 Seats Lest | 20 Windows Seats',
      fromtime: '23:00, 22 MAY',
      totime: '06:00, 23 MAY',
      way: '7 hrs 00 mins',
      track: 'Live Tracking',
      free : 'Free Collection*',
      bcost: 'RS.824/-',
      start: 'Starting From',
      
    },
  ]

busL: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data)=> this.busL = data)
  }

}

