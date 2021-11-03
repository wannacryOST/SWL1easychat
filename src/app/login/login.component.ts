import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  //Deklaration Variable nickname
  nickname:string = '';


  ngOnInit(): void {
  }


  @Output() nicknameEvent = new EventEmitter<string>();

  public sendNickname(){
    this.nicknameEvent.emit(this.nickname);
    //this.nickname = ''    auskommentiert, damit Nickname im Inputfeld stehen bleibt (?)
  }
}

