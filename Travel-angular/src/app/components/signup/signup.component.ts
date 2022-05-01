import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cities = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Hyderabad', 'Bangalore', 'Pune', 'Rajasthan', 'Punjab', 'Vizag', 'Vijayawada', 'Lucknow'];
  userList: any;
  myform: any;


  constructor(private signService: SignupService) { }

  ngOnInit(): void {
    this.signService.getProfiles().subscribe((result:any)=>{
     this.userList=result
     console.log(result)
    })
  }
  getValues() {
    console.log(this.myform);

    this.signService.getSignuplist(this.myform)
      .subscribe((data) => {
        console.log(data)
      })
  }


}

function value(myform: any, value: any) {
  throw new Error('Function not implemented.');
}
