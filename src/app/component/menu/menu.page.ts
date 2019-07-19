import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/classes/Channel';
import { ChannelMessageService } from 'src/app/services/channel-message.service';
import { ChannelMessage } from 'src/app/classes/ChannelMessage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  channels:string[] = ["sdfdf", "sdfsdf"];
  channelMessages:ChannelMessage[];

  constructor(
    private menu: MenuController,
    private channelService:ChannelService,
    private channelMessageService:ChannelMessageService
    ) { }

  ngOnInit() {
    this.loadChannelMessages();
    this.loadChannels();
  }

  loadChannels(){
    
  }

  loadChannelMessages(){
    let address:string = "";
  }
 

}
