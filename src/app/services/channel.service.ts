import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Channel } from '../classes/Channel';
import { UserChannelPk } from '../classes/UserChannel';



const httpOptions = {
  headers: new HttpHeaders(
  { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  }
  )

};
@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  userChannels:UserChannelPk[];
  homepageChannel:Channel = new Channel(null, "HomePage", null, 1);
  channels:Channel[] = [this.homepageChannel];

  constructor(
    private http:HttpClient
  ) { }

  getData(userid:number):Observable<Channel[]>{
    let address:string = "http://localhost:8080/channel/userchannels/" + userid;
    this.channels[0].user_id = userid;
    this.http.get<UserChannelPk[]>(address, httpOptions)
      .subscribe(userChannel => {
        this.userChannels = userChannel;
        console.log(this.userChannels);
        this.getChannels()
          .subscribe(channelReturn => {
             console.log("finished gettting channels?");
          });
      });
      return of(this.channels);
  }

  getChannels():Observable<Channel[]>{
    let address:string = "http://localhost:8080/channel/channel/userchannels/";
    
    for (let i = 0; i < this.userChannels.length; i++) {
      let temp:string = address;
      console.log("idjfif : " + this.userChannels[i].userChannel.getChannel());
      temp = temp + this.userChannels[i].userChannel.getChannel();
      this.http.get<Channel>(address, httpOptions)
        .subscribe(channel => {
          this.channels.push(channel);
        });
    }
    return of(this.channels);
  }


}
