import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.css']
})
export class HoteldetailsComponent implements OnInit {
  public getemail:any;
  hotelUser: any;
  constructor(private profile: ListService) { }

  ngOnInit(): void {
    this.getemail=sessionStorage.getItem("email");
    this.profile.getHotelList(this.getemail).subscribe((result: any) => {
      this.hotelUser = result;
      console.log(result)
    })
  }

}
