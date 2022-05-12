import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-flightclick',
  templateUrl: './flightclick.component.html',
  styleUrls: ['./flightclick.component.css']
})
export class FlightclickComponent implements OnInit {


  bookedby :string='loggedIn?.firstname';
  loggedIn:any;
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 5000;
  userList: any;
  isUserAdded: boolean = false;

  constructor(private signService: SignupService, private myhttp: HttpClient) {
    this.loggedIn = JSON.parse(sessionStorage.getItem('loggedUser') || 'null');
   }

  ngOnInit(): void {
    // this.signService.getFlightlist().subscribe((result:any)=>{
    //   this.userList=result
    //   console.log(result)
    //  })
  }

  getFormsValue(formRef: any) {

    let data = {
      booked_by: formRef.value.bookedby,
      firstname: formRef.value.fname,
      lastname: formRef.value.lname,
      email: formRef.value.email,
      phonenumber: formRef.value.phonenumber,
      passengers: formRef.value.passengers,
      amount: this.calculateAmount,
      date: formRef.value.date,
    };

    this.myhttp.post('/api/users/flightclick', data, { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        formRef.form.reset();
      });
  }


  // getValues() {
  //    alert("Payment done successfully")
  // }
  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }
}
