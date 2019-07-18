import { Component, OnInit } from '@angular/core';
import { DirectMessageService } from '../../services/direct-message.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {

  toId = '1';
  constructor(private directMessageService: DirectMessageService) { }

  ngOnInit() {
    this.getDMdata();
  }

  getDMdata( ) {
    this.directMessageService.getData(this.toId);
  }

}
