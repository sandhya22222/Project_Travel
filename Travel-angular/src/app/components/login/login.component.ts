import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;

  userMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myuser: SignupService

  ) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // fname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;


    this.myuser.loginUser(this.f['email'].value, this.f['password'].value)
      .subscribe(
        {
          next: (data: any) => {
            this.loading = true;
            console.log(data, this.f)

            if (data.length) {
              sessionStorage.setItem('loggedUser', JSON.stringify(data[0]));
              this.router.navigate(['/']);
            } else {
              this.userMessage = 'Login user not found, please enter correct email and password';
            }

          },
          error: (e) => {
            this.loading = false;
            console.error(e)
          }
        }
      )


  }

}
