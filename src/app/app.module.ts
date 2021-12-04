import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { LoginComponent } from './login/login.component';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatBarComponent,
    ChatHistoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    //HttpClient,
    HttpClientModule,
    //HttpHeaders
  ],
  providers: [LoginComponent, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

