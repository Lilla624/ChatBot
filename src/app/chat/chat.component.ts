import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages:any
  newMessages=""

  constructor(private chat:ChatService) {
    this.chat.getMessages().
  }

}
