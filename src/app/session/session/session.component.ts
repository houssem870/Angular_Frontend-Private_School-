import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../Token/Token.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  info: any;
  click : boolean = false;
  constructor(private token: TokenService, private router: Router) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()

    };
    if(this.token.getAuthorities().toString()==='Professionel')
      this.click = true;  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl('login');

  }

}
