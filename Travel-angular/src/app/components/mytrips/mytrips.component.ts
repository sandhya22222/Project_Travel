import { Component, OnInit, TemplateRef } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { MatDialog } from '@angular/material/dialog';
import { TraindetailsComponent } from 'src/app/routing/traindetails/traindetails.component';
import { FlightdetailsComponent } from 'src/app/routing/flightdetails/flightdetails.component';
import { BusdetailsComponent } from 'src/app/routing/busdetails/busdetails.component';
import { HoteldetailsComponent } from 'src/app/routing/hoteldetails/hoteldetails.component';


@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  // elseBlock: TemplateRef<HTMLDivElement>|null = null;
  // show = true;
  // TemplateRef<NgIfContext<T>>

  public getemail: any;
  userList: any;
  loggedIn: any;
  trainUser: any;
  busUser: any;
  hotelUser: any;

  constructor(private profile: ListService, private myDilog: MatDialog) {

  }

  ngOnInit(): void {
    this.getemail = sessionStorage.getItem("email");

    this.profile.getFlightsList(this.getemail).subscribe((result: any) => {
      this.userList = result;
      console.log(result)
    });


    this.profile.getTrainsList(this.getemail).subscribe((result: any) => {
      this.trainUser = result;
      console.log(result)
    });

    this.profile.getBusesList(this.getemail).subscribe((result: any) => {
      this.busUser = result;
      console.log(result)
    });

    this.profile.getHotelList(this.getemail).subscribe((result: any) => {
      this.hotelUser = result;
      console.log(result)
    });
  }

  openDialog() {
    const dilogref = this.myDilog
      .open(TraindetailsComponent, {
        height: '550px',
        width: '550px',
        disableClose: true
      });



    dilogref.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result ${result}`);
    });
  }

  openDialogFlight() {
    const dilogref1 = this.myDilog
      .open(FlightdetailsComponent, {
        height: '550px',
        width: '550px',
        disableClose: true
      });

    dilogref1.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result ${result}`);
    })

  }

  openDialogBus() {
    const dilogref1 = this.myDilog
      .open(BusdetailsComponent, {
        height: '600px',
        width: '700px',
        disableClose: true
      });

    dilogref1.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result ${result}`);
    })

  }

  openDialogHotel() {
    const dilogref1 = this.myDilog
      .open(HoteldetailsComponent, {
        height: '600px',
        width: '700px',
        disableClose: true
      });

    dilogref1.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result ${result}`);
    })

  }
    getCancel(){
      alert('!! Due To Covid Reasons Cancellation Is Not Available !!')
    }

 }

