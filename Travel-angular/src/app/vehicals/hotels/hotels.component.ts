import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  state=['Andhra Pradesh','Telangana','Delhi','Maharastra','Assam','Bangalore','Kashmir','Chennai','Rajasthan'];

  constructor() { }

  ngOnInit(): void {
  }

}
