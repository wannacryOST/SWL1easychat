import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  constructor() { }

  message = "message string parent";
  messageArray: string[] = [];

  ngOnInit() {
  }

  receiveMessage($event : string) {
    this.message = $event;
    if (this.message) {
      this.messageArray.push(this.message)
      this.message = ''
    }
  }

}
