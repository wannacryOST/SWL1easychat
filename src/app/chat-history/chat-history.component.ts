import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  

  // Import des Arrays chatHistory aus der App-Component
  @Input() chatHistory!: any[];


  constructor(public pService: PersonService) { } 

  ngOnInit() {
  }
}

// ngAfterContentChecked() {

// this.cdref.detectChanges();

// var el = $('#messageList')

// el.scrollTop($('#messageList').prop('scrollHeight'))

// }

