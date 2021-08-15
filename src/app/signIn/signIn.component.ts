import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth/Auth.service";
import {Router} from "@angular/router";
import {TokenService} from '../Token/Token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
    result = false;


  myForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private token: TokenService) {
  }


  get form() {
    return this.myForm.controls;
  }

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getAuthorities();
    }
    this.myForm = this.fb.group({
      username: [''],
      password: ['']

    });
  }

  onSubmit() {
    console.log("username :- " + this.form.username.value)
    console.log("password :- " + this.form.password.value)

    let signInfo = {
      'username': this.form.username.value,
      'password': this.form.password.value

    }
    console.log(signInfo);


    this.authService.attemptAuth(signInfo).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUsername(data.username);
        this.token.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.token.getAuthorities();
        this.router.navigateByUrl('session');


      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

  }

  reloadPage() {
    window.location.reload();
  }

}
