import { computeMsgId } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Message } from '../message';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  // usersArray:any[] = [];
  activeUsers: any[] = [];

  constructor(public pService:PersonService) { }

  @Input()

 //alle 2sek wird Serverseitig neu geladen
  ngOnInit() {

    setInterval(() => {
      this.getUsers();
    }, 2000);
  }

  private getUsers(): void{
    this.activeUsers = this.pService.getNicknames()
  }
}
