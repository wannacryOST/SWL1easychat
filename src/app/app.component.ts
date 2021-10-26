import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'EasyChat';
  public messageText: string = ''
  public chatMsg(event: any): void{
    console.log(<string>event.toUpperCase());
  }
}
