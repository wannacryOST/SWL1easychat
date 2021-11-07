import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private myNickname: string = '';

  public get nickname(): string {
    return this.myNickname;
  }

  public set nickname(value: string) {
    this.myNickname = value;
  }

}
