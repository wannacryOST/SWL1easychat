import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public pService: PersonService) { }

  //Deklaration Variable nickname
  nickname:string = '';
  inputError:boolean = false;


  @Output() nicknameEvent = new EventEmitter<string>();

  public validateNickname(){
    let inputText = this.nickname
    if (inputText.length > 0) {

      if ((/([^A-Za-z])/).test(inputText.substring(0, 1)) || (/([^A-Za-z0-9])/).test(inputText.substring(1, inputText.length)) ) {
        this.inputError = true;
      } else {
        this.inputError = false;
      }
    } else {
      this.inputError = false;
    }
  }

  public sendNickname(){
    this.validateNickname();
    if (!this.inputError && this.nickname) {
      this.nicknameEvent.emit(this.nickname);
      this.pService.nickname = this.nickname;
    }
  }
}

