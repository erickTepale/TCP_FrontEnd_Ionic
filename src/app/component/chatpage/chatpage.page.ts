import { Component, OnInit } from '@angular/core';
import { DirectMessageService } from '../../services/direct-message.service';
import { LoginService } from '../../services/login.service';
import { Message } from './message';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {
  messages: Message[];
  constructor(private directMessageService: DirectMessageService, private loginService: LoginService) { }

  ngOnInit() {
    this.getDMdata();
    console.log(this.loginService.currentUser.user_id);
  }

  getDMdata( ) {
    this.directMessageService.getData(this.loginService.currentUser.user_id).subscribe(
      data => {
        console.log(data);
        this.messages = data;
      }
    );
  }
}
