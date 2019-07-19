import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ChannelService } from '../../services/channel.service';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/classes/Channel';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {
  channels:Channel[];
  constructor(
    private loginService:LoginService,
    private channelService:ChannelService
    
    ) { }

  ngOnInit() {
    this.loadChannels();
    //this.loadChannelMessages();
    
  }

  loadChannels(){
    let userId:number = this.loginService.currentUser.user_id;
    this.channelService.getData(userId)
      .subscribe(channels => 
        {
          this.channels = channels;
          console.log(channels);
        });
  }

  loadChannelMessages(){
    
  }
}
