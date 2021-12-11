import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ChatService } from '../chat.service';
import { Message } from '../message';
import { computeMsgId } from '@angular/compiler';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})

export class ChatHistoryComponent {

  chatHistory:any[] = [];


  dateNow:Date = new Date;


  constructor(public pService: PersonService, public cService: ChatService) { } 

  @Input()  nickname!: string;
  

  nnIsSimilar: boolean = false;
  


  //alle 2sek wird Serverseitig neu geladen
  ngOnInit() {
    setInterval(() => {
      this.getHistory();
    }, 2000);
  }


  private getHistory(): void {
    this.cService.getHistory().subscribe((response: Message[]) => {
      this.chatHistory = [];

        for (let msg of response) {
          this.chatHistory.push({message: msg.message, nickname: msg.nickname, timestamp: new Date(msg.timestamp), type: msg.type, showNickname: msg.showNickname});
          if (this.nickname==msg.nickname) {
            console.log(this.nickname);
            console.log(msg.nickname);
            this.nnIsSimilar = true;
          }
          else {
            this.nnIsSimilar = false;
          }
        }
      },
        (error: any) => {
          console.log(<any>error);
        });
  }
}
