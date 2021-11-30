import { componentFactoryName } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public pService: PersonService) { }

  public title: string = 'EasyChat';
  
  // Definition Variable nicknamehistory
  nicknamehistory:string = '';

  // Definiton Variable message
  message = '';

  // Definition Array messageArray
  messageArray: any[] = [];

  // Definition noUser für Fehlermeldung, wenn Nickname fehlt
  noUser:boolean = false;


  //Methode die alle Nachrichten löscht wenn das Array mehr als 20 Nachrichten enthält
  deleteArray() {
    if (this.messageArray.length > 20) {
      this.messageArray.shift();
    }
  }

  // Methode, nimmt Event entgeben, wenn Message abgesendet wird in der Chat-bar-Component
  receiveMessage($event : string) {
    
    // Fehlermeldung, wenn Nickname fehlt, wird Variable noUser auf true gesetzt
    if (!this.pService.nickname) {
      this.noUser = true
      return
    } else {
      this.noUser = false
    }

    // Nickname wird der Nachricht voran gestellt und mit der Nachricht zusammengeführt
    this.message = $event;
    if (this.message) {
      // showNickname wird auf true gesetzt, damit wird Nickname vor der Message angezeigt
      let showNickname = true;
      // wenn der aktuelle Nickname mit dem Nicknamen der letzten Message übereinstimmt, wird der Nickname nicht angezeigt
      if (this.messageArray[this.messageArray.length - 1].nickname === this.nicknamehistory) showNickname = false
      this.nicknamehistory = this.pService.nickname;
      var myobj = { message: this.message, nickname: this.nicknamehistory, type: 'message', timestamp: new Date(), showNickname: showNickname }
      this.messageArray.push(myobj)
      this.deleteArray();
      this.message = ''
    }
  }

  // Infomeldung, dass neuer Benutzer dem Chat beigetreten ist
  loginUser($event : string) {
    this.noUser = false;
    // if (!nickname) {
    if (!this.pService.nickname) {
      this.messageArray.push({
        message: "ist dem Chat beigetreten",
        nickname: $event,
        type: 'newUser',
        timestamp: new Date()
      })
      this.deleteArray();
    }
    // wenn vorher bereits einen Nicknamen eingegeben wurde, wird Text "xy hat den Namen zu xy geändert" ausgegeben
    else {
      this.messageArray.push({
        message: this.pService.nickname + " hat den Namen zu " + $event + " geändert.",
        nickname: $event,
        type: 'changeUser',
        timestamp: new Date()
      })
      this.deleteArray();
    }}
}
