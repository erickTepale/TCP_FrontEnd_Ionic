import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../component/chatpage/message';
import { Observable } from 'rxjs';

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
  messages: Observable<Message[]>;

  constructor(private http: HttpClient) { }
  getData(userId: number) {
    return this.http.get<Message[]>(this.address + userId);

  }
}
