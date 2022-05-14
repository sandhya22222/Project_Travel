import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {
  public getemail:any;
  userList:any;
  loggedIn:any;
  constructor(private profile: ListService) {
   
   }

  ngOnInit(): void {
     this.getemail=sessionStorage.getItem("email");

    this.profile.getFlightsList().subscribe((result: any) => {
      this.userList = result;
      console.log(result)
    })

  }

}
