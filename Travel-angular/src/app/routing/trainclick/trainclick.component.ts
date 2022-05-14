import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainclick',
  templateUrl: './trainclick.component.html',
  styleUrls: ['./trainclick.component.css']
})
export class TrainclickComponent implements OnInit {
  // trainL: any;
  isUserAdded = false;
  calculateAmount = 0;
  isGetAmtClicked = false;
  passengers: number = 1;

  ticketPrize: number = 500;
  constructor(private route: ActivatedRoute, private myhttp: HttpClient) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((data) => this.trainL = data)
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

    this.myhttp.post('/api/users/trainclick', data, { responseType: 'text' })
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
