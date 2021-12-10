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

  // usersArray:any[] = [];
  activeUsers: any[] = [];

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

      // this.usersArray = [];
      this.activeUsers = [];
      
      //  for-Schleife pusht alle Nicknamen und Types aus der History in UsersArray
      for(let msg of response){  
        if(msg.type=="newUser"){
          this.activeUsers.unshift({nickname: msg.nickname});
        }
      }
      
      for(let msg of response){
        if (msg.type=="changeUser"){
          this.activeUsers.unshift({nickname: msg.nickname});
          var userAlt = msg.message.split(" ")[0];
          // for(let msg of response){
          //   var userNeu = msg.nickname;
          //   var hideAlt = this.activeUsers.find({msg.nickname} == userAlt)
          //   hideAlt.style.visibility = "hidden";
          // }
        }
      }            
    },
    (error: any) => {
      console.log(<any>error);
    });
  }
}