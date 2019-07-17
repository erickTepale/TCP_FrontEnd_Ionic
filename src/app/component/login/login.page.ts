import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
  }

  login(username:string, password:string){
    console.log(this.loginService.getData(username));
  }

}
