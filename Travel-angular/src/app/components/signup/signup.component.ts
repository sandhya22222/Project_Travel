import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // cities = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Hyderabad', 'Bangalore', 'Pune', 'Rajasthan', 'Punjab', 'Vizag', 'Vijayawada', 'Lucknow'];
  userList: any;
  myform: any;
  isUserAdded = false;

  constructor(private signService: SignupService,private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.signService.getProfiles().subscribe((result:any)=>{
     this.userList=result
     console.log(result)
    })
  }
  getFormsValue(formRef: any) {

    let data = {
    firstname: formRef.value.fname,
    lastname: formRef.value.lname,
    email: formRef.value.email,
    phone_num:formRef.value.phnnum,
    password: formRef.value.password,
    city:formRef.value.city,
      // job_title: formRef.value['my-langs'],
      
      // create_datetime: new Date().toJSON().slice(0, 10)
    };

    this.myhttp.post('/api/users/signup', data, { responseType: 'text' })
    .subscribe(data => {
      console.log(data);
      this.isUserAdded = true;
      formRef.form.reset();
    });
}
}

// function value(myform: any, value: any) {
//   throw new Error('Function not implemented.');
// }
