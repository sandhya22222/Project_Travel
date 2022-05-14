import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-busclick',
  templateUrl: './busclick.component.html',
  styleUrls: ['./busclick.component.css']
})
export class BusclickComponent implements OnInit {
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 999;
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
      fromc: formRef.value.from,
      toc: formRef.value.to,
      passengers: formRef.value.passengers,
      amount: this.calculateAmount,
      date: formRef.value.date,
    };

    this.myhttp.post('/api/users/busclick', data, { responseType: 'text' })
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

