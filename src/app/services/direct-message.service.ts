import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../component/chatpage/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DirectMessageService {
  address = 'http://localhost:8080/DM/';
  messages: Observable<Message[]>;

  constructor(private http: HttpClient) { }
  getData(userId: number, fromId: number) {
    return this.http.get<Message[]>(this.address + '/' + fromId + '/' + userId);

  }
}
