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

  receiveMessage($event : string) {

    

    if (!this.pService.nickname) {
      alert("zuerst anmelden");
      return
    }

    this.message = $event;
    if (this.message) {
      this.nicknamehistory = this.pService.nickname + ": ";
      var myobj = { message:this.message, nickname:this.nicknamehistory }
      this.messageArray.push(myobj)
      this.message = ''
    }
  }

  loginUser($event : string) {
    this.messageArray.push({
      message: $event + " ist dem Chat beigetreten"
    })
  }

}
