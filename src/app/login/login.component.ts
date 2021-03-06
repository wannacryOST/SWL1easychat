import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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
  // Deklaration Variable inputError
  inputError:boolean = false;
  // Deklaration Variable welcomeText
  welcomeText:string= '';

  // importiert den noUser aus der App-Component
  @Input()  noUser!:boolean;

  // definiert den sameUser
  sameUser:boolean = false;

  // NicknameEvent wird der App-Component übergeben
  @Output() nicknameEvent = new EventEmitter<string>();

  // Methode, die den Nickname auf den regEx prüft und den inputError auf true oder false setzt
  public validateNickname(){
    let inputText = this.nickname
    if (inputText.length > 0) {

      if ((/([^A-Za-zäöüÄÖÜ])/).test(inputText.substring(0, 1)) || (/([^A-Za-z0-9ÄÖÜäöü])/).test(inputText.substring(1, inputText.length)) ) {
        this.inputError = true;
      } else {
        this.inputError = false;
      }
    } else {
      this.inputError = false;
    }
  }

  // Methode, die den Nickname prüft und dem pService übergibt und Willkommen-Text ausgibt
  public sendNickname(){
    this.validateNickname();
    if (this.nickname == this.pService.nickname) {
      this.sameUser = true;
      if (!this.nickname) {
        this.sameUser = false;
        return
      }
      this.nickname='';
      return
    }
    else {
      this.sameUser = false;
    }
    if (!this.inputError && this.nickname) {
      this.nicknameEvent.emit(this.nickname);
      this.pService.nickname = this.nickname;

      this.welcomeText = "Willkommen " + this.nickname +"!";

      this.nickname='';
    }
  }
}
