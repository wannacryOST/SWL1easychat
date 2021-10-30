import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {

  constructor() { }

  message:string = '';

  @Output() messageEvent = new EventEmitter<string>();

  public sendMessage() {
    this.messageEvent.emit(this.message.trim());
    this.message = ''
  }
}
