import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  constructor(public pService: PersonService) { }

  message = "message string parent";
  messageArray: any[] = [];
  nicknamehistory:string = '';
  

  

  ngOnInit() {
  }

  receiveMessage($event : string) {
    this.message = $event;
    if (this.message) {
      this.nicknamehistory = this.pService.nickname + ": ";
      var myobj = { message:this.message, nickname:this.nicknamehistory }
      this.messageArray.push(myobj)
      this.message = ''
    }


    // document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight
  }



}
