import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';


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
export class LoginService {

  constructor(private http: HttpClient) { }

  getData(username:string){
    let address:string = "http://localhost:8080/user/" + username;
    
    return this.http.get(address, httpOptions)
      .subscribe(data => {
        console.log("we got ", data)
      });
  }
}
