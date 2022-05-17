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
  getFormsValue(formRef: any) { }

  getAmount() {

    this.isGetAmtClicked = true;

    this.calculateAmount = this.passengers * this.ticketPrize
  }

}
