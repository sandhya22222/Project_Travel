import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: any;
  constructor() { 
    this.loggedIn = JSON.parse(sessionStorage.getItem('loggedUser') || 'null');
  }

  ngOnInit(): void {
  }
  
  logout() {
    sessionStorage.clear();
    window.location.reload();
  }
}
