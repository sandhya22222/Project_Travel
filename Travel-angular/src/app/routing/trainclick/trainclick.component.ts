import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainclick',
  templateUrl: './trainclick.component.html',
  styleUrls: ['./trainclick.component.css']
})
export class TrainclickComponent implements OnInit {
  trainL: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.trainL = data)
  }

}
