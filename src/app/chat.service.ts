import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})


export class ChatService {

  constructor(private http:HttpClient) { }

  //gibt erstellte Message an Server weiter
  public addToHistory(message: Message): Observable<Message> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post<Message>('https://chatnroll.herokuapp.com/api/history', message, options);
    // return this.http.post<Message>('http://localhost:3000/api/history', message, options);
  }


  public getHistory(): Observable<Message[]> {
    return this.http.get<Message[]>('https://chatnroll.herokuapp.com/api/history');
    // return this.http.get<Message[]>('http://localhost:3000/api/history');
  }


}
