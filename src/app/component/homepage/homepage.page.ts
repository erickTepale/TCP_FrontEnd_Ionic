import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private loginservice : LoginService) { 
    
  }

  ngOnInit() {
    console.log("inside homepage: -- " + this.loginservice.currentUser.username);
  }

}
