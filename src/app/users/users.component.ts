import { computeMsgId } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../message';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  usersArray:any[] = [];

  constructor(public cService: ChatService) { }

  @Input()

 //alle 2sek wird Serverseitig neu geladen
  ngOnInit() {
  setInterval(() => {
    this.getUsers();
  }, 2000);
}

  private getUsers(): void{
    this.cService.getHistory().subscribe((response: Message[]) => {
      this.usersArray = [];
      // Type des Nicknames ins Variable speichern, nur newUser
      // let t = msg.type;
      // newUser in usersArray pushen
      // if(t = 'newUser'){

        for(let msg of response){
          this.usersArray.push({nickname: msg.nickname});
        }
      // }
      // Type sameUser nicht in Array pushen, sondern alter Nickname im Array mit neuem überschreiben
      // ...
    },
    (error: any) => {
      console.log(<any>error);
    });
  }
}