import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-totrains',
  templateUrl: './totrains.component.html',
  styleUrls: ['./totrains.component.css']
})
export class TotrainsComponent implements OnInit {

 trains=[{
   trainname:'FALAKNUMA EXP',
   ffboxin:'2S',
   fsboxin:'SL',
   ftboxin:'3A',
   ffoboxin:'2A',
   fromtime:'8:30 AM,Mon',
   totime:'2:40 PM,Tue',
   way:'30 hrs 10 mins',
   ffavailable:'AVAILABLE 171',
   fsavailable:'RAC 19',
   ftavailable:'RAC 24',
   ffoavailable:'GNWL 5',
   fsfree:'Free Cancellation',
   ffcost:'RS.500',
   fscost:'RS.1,450',
   ftcost:'RS.1,800',
   ffocost:'RS.2,000',
},
 {
  trainname:'NETHAJI EXP',
  ffboxin:'1A',
  fsboxin:'2S',
  ftboxin:'SL',
  ffoboxin:'3A',
  fromtime:'3:55 AM,Mon',
  totime:'5:40 PM,Tue',
  way:'25 hrs 45 mins',
  ffavailable:'AVAILABLE 171',
   fsavailable:'RAC 19',
   ftavailable:'GNWL 12',
   ffoavailable:'RAC 18',
   fsfree:'Free Cancellation',
   ffcost:'RS.500',
   fscost:'RS.1,550',
   ftcost:'RS.1,600',
   ffocost:'RS.2,500',
  },
 {
  trainname:'EAST COST EXP',
  ffboxin:'2S',
  fsboxin:'SL',
  ftboxin:'SL',
  ffoboxin:'SL',
  fromtime:'9:00 AM,Mon',
  totime:'7:15 PM,Tue',
  way:'30 hrs 10 mins',
  ffavailable:'AVAILABLE 171',
  fsavailable:'RAC 19',
  ftavailable:'RAC 24',
  ffoavailable:'GNWL 5',
  fsfree:'Free Cancellation',
  ffcost:'RS.700',
  fscost:'RS.1,650',
  ftcost:'RS.1,250',
  ffocost:'RS.2,300',
  },
 {
  trainname:'RAJADHANI EXP',
  ffboxin:'2S',
  fsboxin:'SL',
  ftboxin:'SL',
  ffoboxin:'SL',
  fromtime:'9:30 AM,Mon',
  totime:'6:40 PM,Tue',
  way:'30 hrs 10 mins',
  ffavailable:'AVAILABLE 171',
   fsavailable:'RAC 19',
   ftavailable:'GNWL 12',
   ffoavailable:'RAC 18',
   fsfree:'Free Cancellation',
   ffcost:'RS.800',
   fscost:'RS.1,750',
   ftcost:'RS.2,900',
   ffocost:'RS.2,300',
  }
]
  trainL: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.trainL = data)
  }

}
