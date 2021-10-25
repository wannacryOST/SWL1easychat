import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  myText:string = ''
  
  ngOnInit(): void {
    
  }

  public clearText(): void {
    this.myText = ''
  }

}