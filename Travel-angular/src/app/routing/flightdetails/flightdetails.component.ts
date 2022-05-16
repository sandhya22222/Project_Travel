import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {
  userList:any;
  public getemail:any;
  constructor(private profile: ListService) { }

  ngOnInit(): void {
    this.getemail=sessionStorage.getItem("email");
    this.profile.getFlightsList(this.getemail).subscribe((result: any) => {
      this.userList = result;
      console.log(result)
    })
  }

}
