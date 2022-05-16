import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css']
})
export class BusdetailsComponent implements OnInit {
  public getemail:any;
  busUser: any;
  constructor(private profile: ListService) { }

  ngOnInit(): void {
    this.getemail=sessionStorage.getItem("email");
    this.profile.getBusesList(this.getemail).subscribe((result: any) => {
      this.busUser = result;
      console.log(result)
    })

  }
  // getPrint(){
  //   alert('Printed')
  // }

}
