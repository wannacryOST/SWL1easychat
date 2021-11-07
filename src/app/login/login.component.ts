import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public pService: PersonService) { }

  //Deklaration Variable nickname
  nickname:string = '';


  ngOnInit(): void {
    $(document).ready(function(){
      $('#nicknameEingabe').bind('keypress',function(evt){
        var key = String.fromCharCode(evt.which || evt.charCode);
        if($("#nicknameEingabe").text()!.toString().length <= 0){
          if(/^[a-zA-Z]/i.test(key) === false) evt.preventDefault();;
        }else{
        if(/[a-zA-Z0-9]/i.test(key) === false) evt.preventDefault();
        }
      })
    });
  }


  @Output() nicknameEvent = new EventEmitter<string>();

  public sendNickname(){
    this.nicknameEvent.emit(this.nickname);
    this.pService.nickname = this.nickname;
  }
}

