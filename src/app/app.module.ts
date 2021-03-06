import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { LoginComponent } from './login/login.component';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatBarComponent,
    ChatHistoryComponent,
    LoginComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    //HttpClient,
    HttpClientModule,
    //HttpHeaders
  ],
  providers: [LoginComponent, PersonService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

