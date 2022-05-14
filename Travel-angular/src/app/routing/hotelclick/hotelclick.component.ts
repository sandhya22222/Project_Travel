import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-hotelclick',
  templateUrl: './hotelclick.component.html',
  styleUrls: ['./hotelclick.component.css']
})
export class HotelclickComponent implements OnInit {
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 15940;
  isUserAdded: boolean = false;

  constructor(private signService: SignupService, private myhttp: HttpClient) { }

  ngOnInit(): void {
  }

  getFormsValue(formRef: any) {

    let data = {
     
      firstname: formRef.value.fname,
      lastname: formRef.value.lname,
      email: formRef.value.email,
      phonenumber: formRef.value.phonenumber,
      city: formRef.value.city,
      hotelname: formRef.value.hotelname,
      passengers: formRef.value.passengers,
      checkin: formRef.value.checkin,
      checkout: formRef.value.checkout,
      rooms:formRef.value.rooms,
      amount: this.calculateAmount,
      // date: formRef.value.date,
    };

    this.myhttp.post('/api/users/hotelclick', data, { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        formRef.form.reset();
      });
  }

  getValues() {
     alert("Payment done successfully")
  }
  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }
}

