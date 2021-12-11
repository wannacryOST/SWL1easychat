import { componentFactoryName } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, HostListener  } from '@angular/core';
import { PersonService } from './person.service';
import { ChatService } from './chat.service';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public pService: PersonService, public cService: ChatService) { }

  public title: string = 'EasyChat';

  // Definiton Variable message
  message = '';

  // Definition Array messageArray
  messageArray: any[] = [];

  // Definition noUser für Fehlermeldung, wenn Nickname fehlt
  noUser:boolean = false;


  //Methode die alle Nachrichten löscht wenn das Array mehr als 20 Nachrichten enthält
  deleteFirstArray() {
    if (this.messageArray.length > 20) {
      this.messageArray.shift();
    }
  }

  // Methode, nimmt Event entgeben, wenn Message abgesendet wird in der Chat-bar-Component
  receiveMessage($event : string) {

    // Fehlermeldung, wenn Nickname fehlt, wird Variable noUser auf true gesetzt
    if (!this.pService.nickname) {
      this.noUser = true
      return
    } else {
      this.noUser = false
    }

    // Nickname wird der Nachricht voran gestellt und mit der Nachricht zusammengeführt
    this.message = $event;
    if (this.message) {

      let m = new Message(this.message, this.pService.nickname, new Date(), 'message', this.pService.userId);

      //Objekt m in addToHistory Methode hinein pushen
      this.cService.addToHistory(m).subscribe(
        (response:Message) => {
          console.log('REST servergaveback' + response);
        })

      //löscht erstes Objekt
      this.deleteFirstArray();
      this.message = ''
    }
  }

  // Infomeldung, dass neuer Benutzer dem Chat beigetreten ist
  loginUser($event : string) {
    this.noUser = false;
    let m;
    console.log($event);
    console.log(this.pService.nickname);

    if (!this.pService.nickname) {

      m = new Message(this.pService.nickname + "ist dem Chat beigetreten", $event, new Date(), 'newUser', this.pService.userId);

    }
    // wenn vorher bereits einen Nicknamen eingegeben wurde, wird Text "xy hat den Namen zu xy geändert" ausgegeben
    else {

      m = new Message(this.pService.nickname + " hat den Namen zu " + $event + " geändert.", $event, new Date(), 'changeUser', this.pService.userId);

    }

    //Objekt m in addToHistory Methode hinein pushen
    this.cService.addToHistory(m).subscribe(
      (response:Message) => {
      console.log('REST servergaveback' + response);
      })
  }

  @HostListener('window:unload', ['$event'])
  exitUser(event : string){
    if (this.pService.nickname != ''){
      let userId = this.pService.userId;
      let m = new Message(this.pService.nickname + " ist heim gegangen ", this.pService.nickname, new Date(), 'exitUser', this.pService.userId);
      this.cService.addToHistory(m).subscribe(
        (response:Message) => {
        console.log('REST servergaveback' + response);
      })
    }
  }
}
