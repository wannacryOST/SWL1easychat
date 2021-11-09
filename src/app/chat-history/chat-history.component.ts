import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  @Input() chatHistory!: any[];


  constructor(public pService: PersonService) { } 

  ngOnInit() {
  }

    // document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight
}



