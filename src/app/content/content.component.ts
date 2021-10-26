import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

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