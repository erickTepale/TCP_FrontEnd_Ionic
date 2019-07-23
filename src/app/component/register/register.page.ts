import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private registerService:RegisterService,
    private router:Router,
    private loginService:LoginService
    ) { }

  ngOnInit() {
  }

  register(username:string, password1:string, password2:string){
    if(this.confirmPasswords(password1, password2)){
      this.registerService.postUser(username, password1)
        .subscribe(response => {
          this.loginService.currentUser.user_id = response.user_id;
          this.loginService.currentUser.username = response.username;
          console.log(this.loginService.currentUser);
          this.router.navigate(['homepage']);
        })
    }
  }

  confirmPasswords(password1:string, password2:string):boolean{
    return (password1 == password2);
  }

}
