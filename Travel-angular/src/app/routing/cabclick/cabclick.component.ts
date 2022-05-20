import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-cabclick',
  templateUrl: './cabclick.component.html',
  styleUrls: ['./cabclick.component.css']
})
export class CabclickComponent implements OnInit {

  pickTime: any

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
      fromc: formRef.value.from,
      toc: formRef.value.to,
      departure: formRef.value.departure,
      returnt: formRef.value.return,
      pickup: formRef.value.picktime,
      dropt: formRef.value.droptime,
      rooms:formRef.value.rooms,
      amount: this.calculateAmount,
      
    };

    this.myhttp.post('/api/users/cabclick', data, { responseType: 'text' })
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
