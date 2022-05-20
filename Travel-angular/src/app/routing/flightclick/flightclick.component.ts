import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-flightclick',
  templateUrl: './flightclick.component.html',
  styleUrls: ['./flightclick.component.css']
})
export class FlightclickComponent implements OnInit {
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
  } 

  getFormsValue(formRef: any) {

    let data = {
     
      firstname: formRef.value.fname,
      lastname: formRef.value.lname,
      email: formRef.value.email,
      phonenumber: formRef.value.phonenumber,
      fromc: formRef.value.from,
      toc: formRef.value.to,
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

  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }
}
