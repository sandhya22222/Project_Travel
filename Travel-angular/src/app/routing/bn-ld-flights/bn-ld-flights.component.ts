import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import{FlightclickComponent} from '../flightclick/flightclick.component';


@Component({
  selector: 'app-bn-ld-flights',
  templateUrl: './bn-ld-flights.component.html',
  styleUrls: ['./bn-ld-flights.component.css']
})
export class BnLdFlightsComponent implements OnInit {
 
  flightL: any

  city = [{

    traveltime: '12h 35m',
    totime: '12:35 PM',
    fromtime: '04:20 AM',
    way: '1 stop via Mumbai'
  },
  {
    traveltime: '11h 35m',
    totime: '04:40 PM',
    fromtime: '05:15 AM',
    way: '1 stop via Dhoba'
  },
  {
    traveltime: '9h 20m',
    totime: '8:45 PM',
    fromtime: '011:25 AM',
    way: '1 stop via Mumbai'
  },
  {
    traveltime: '11h 25m',
    totime: '2:00 AM',
    fromtime: '05:00 PM',
    way: '  1 stop via dubai'
  },
  {
    traveltime: '10h 15m',
    totime: '5:00 AM',
    fromtime: '06:20 PM',
    way: '  1 stop via Dhoba'
  },
  {
    traveltime: '8h 20m',
    totime: '06:30 AM',
    fromtime: '010:30 PM',
    way: '1 stop via Bahrain'
  },

  ]


  constructor(private route: ActivatedRoute,private myDilog:MatDialog) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.flightL = data)

  }
openDialog(){
  const dilogref= this.myDilog
  .open( FlightclickComponent,{
    height:'600px',
    width:'700px',
    disableClose:true
  });

  dilogref.afterClosed().subscribe((result) => {
    console.log(`Dialog result ${result}`);
  })

}
}
