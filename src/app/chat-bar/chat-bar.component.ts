import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {

  constructor() { }

  // Deklaration Variable message
  message:string = '';

  // MessageEvent wird an App-Component übergeben
  @Output() messageEvent = new EventEmitter<string>();

  // Methode, um Message dem messageEvent zu übergeben und die Message zu trimmen
  public sendMessage() {
    this.messageEvent.emit(this.message.trim());
    this.message = ''
  }
}
