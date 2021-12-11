import { Injectable } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  // Deklaration Variable myNickname
  private myNickname: string = '';
  private _userId = uuidv4();

  // Methode, die Nickname entgegen nimmt
  public get nickname(): string {
    return this.myNickname;
  }

  // Methode, die Nickname der Variable zuweist
  public set nickname(value: string) {
    this.myNickname = value;
  }

  public get userId() {
    return this._userId
  }

  public getUsers(): Observable<Object[]> {
    return this.http.get<Object[]>('https://chatnroll.herokuapp.com/api/users');
    // return this.http.get<Object[]>('http://localhost:3000/api/users');
  }
  public getNicknames(){
    let activeUsers:string[] = [];
    this.getUsers().subscribe((response: Object[]) => {
      for (const [userId, nickname] of Object.entries(response)) {
        activeUsers.push(nickname.toString())
      }
    },
    (error: any) => {
      console.log(<any>error);
    });
  return activeUsers
}

}
