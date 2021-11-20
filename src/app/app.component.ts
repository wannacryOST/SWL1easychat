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
  public messageText: string = '...';

  nicknamehistory:string = '';
  message = "message string parent";
  messageArray: any[] = [];
  noUser:boolean = false;

  
  // Methode, um Messages in der Chat-History auszugeben
  receiveMessage($event : string) {

    
    // Fehlermeldung, wenn Message geschickt werden möchte, aber Nickname fehlt
    if (!this.pService.nickname) {
      this.noUser = true
      return
    } else {
      this.noUser = false
    }

    // Nickname wird der Nachricht voran gestellt und mit der Nachricht zusammengeführt
    this.message = $event;
    if (this.message) {
      let showNickname = true;

      if (this.messageArray[this.messageArray.length - 1].nickname === this.nicknamehistory) showNickname = false

      this.nicknamehistory = this.pService.nickname;
      var myobj = { message: this.message, nickname: this.nicknamehistory, type: 'message', timestamp: new Date(), showNickname: showNickname }
      this.messageArray.push(myobj)
      this.message = ''
    }
  }

  // Infomeldung, dass neuer Benutzer dem Chat beigetreten ist
  loginUser($event : string) {
    this.noUser = false;
    this.messageArray.push({
      message: "ist dem Chat beigetreten",
      nickname: $event,
      type: 'newUser',
      timestamp: new Date()
    })
  }

  /* public messageJSON: string = '{"message": "...", "nickname": ""}' // key und value */


}

/*
chatbar 
thi.chatmessageChange.emit(JSON.stringify({message: ValueConverter, nickname:this.nickname}))

chathistory:
public content: { message: string, nickname: string } [] = [];

*/