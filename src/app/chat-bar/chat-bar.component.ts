import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {

  constructor() { }

  message:string = ''

  get chatMessage(): string {
    return this.message;
  }

  @Output() 
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value) {
    this.message = value;
    this.chatMessageChange.emit(this.message);
  }

  public showMessage(): void {
    alert(this.chatMessage);
    this.chatMessage = '';
  }

}
