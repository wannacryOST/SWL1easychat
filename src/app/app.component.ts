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
  type: string = ''; //https://stackoverflow.com/questions/46047502/generate-dynamic-css-based-on-variables-angular/46048424

  receiveMessage($event : string) {

    
// Fehlermeldung, wenn Message geschickt werden möchte, aber Nickname fehlt
    if (!this.pService.nickname) {
      alert("Bitte zuerst Nickname eingeben.");
      return
    }

    this.message = $event;
    if (this.message) {
      this.nicknamehistory = this.pService.nickname + ": ";
      this.type = "message"
      var myobj = { message:this.message, nickname:this.nicknamehistory, type:this.type } //type von chat-history aufrufen und dort id definieren um auf class zuzugreifen von css
      this.messageArray.push(myobj)
      this.message = ''
    }
  }

  loginUser($event : string) {
    this.messageArray.push({
      message: $event + " ist dem Chat beigetreten"
    })
  }

  public messageJSON: string = '{"message": "...", "nickname": ""}' // key und value


}

/*
chatbar 
thi.chatmessageChange.emit(JSON.stringify({message: ValueConverter, nickname:this.nickname}))

chathistory:
public content: { message: string, nickname: string } [] = [];

*/