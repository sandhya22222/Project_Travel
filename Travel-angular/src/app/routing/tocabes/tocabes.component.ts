import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tocabes',
  templateUrl: './tocabes.component.html',
  styleUrls: ['./tocabes.component.css']
})
export class TocabesComponent implements OnInit {
  cabsL: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => this.cabsL=data)
  }

}
