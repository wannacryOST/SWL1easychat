import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  // Deklaration Variable myNickname
  private myNickname: string = '';

  // Methode, die Nickname entgegen nimmt
  public get nickname(): string {
    return this.myNickname;
  }

  // Methode, die Nickname der Variable zuweist
  public set nickname(value: string) {
    this.myNickname = value;
  }

}
