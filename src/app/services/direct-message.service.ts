import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../component/chatpage/message';

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


export class DirectMessageService {

  fromId = 2;
  address = 'http://localhost:8080/DM/' + this.fromId + '/';
  messages: Message[];

  constructor(private http: HttpClient) { }
  getData(userId: string) {
    this.http.get(this.address + userId).subscribe(
      data => { console.log('we got ', data);

    }
      );

  }
}
