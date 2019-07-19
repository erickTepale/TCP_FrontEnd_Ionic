import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CurrentUser } from '../../classes/CurrentUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  currentUsers: CurrentUser[];
  actualUser: CurrentUser;

  constructor(
    private loginService: LoginService,
    private router:Router
    ){}

  ngOnInit() {
    
  }
  
  login(username:string, password:string){
    this.retrieveLoginData(username, password);
    
  }

  validateData(password:string){
    for(let i = 0; i < this.currentUsers.length; i++){
      
      if(this.currentUsers[i].password == password){
        console.log("array winner 1 + " + this.currentUsers[i].user_id);
        console.log("array winner 2 + " +this.currentUsers[i].username);
        //this.actualUser = new CurrentUser(this.currentUsers[i].user_id, this.currentUsers[i].username, null);
        this.loginService.currentUser.user_id = this.currentUsers[i].user_id;
        this.loginService.currentUser.username = this.currentUsers[i].username;
        this.router.navigate(['chatpage']);
      }
    }

  }

  retrieveLoginData(username: string, password:string){
    this.loginService.getData(username)
      .subscribe(users => 
        {
          this.currentUsers = users;
          console.log(this.currentUsers);
          this.validateData(password);
        }
      );
    
    //will print null because it is not back yet ! ^ lul
    console.log(this.currentUsers);
  }

}
