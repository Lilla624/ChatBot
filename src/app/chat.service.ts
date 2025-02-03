import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  refMessage: AngularFirestoreCollection<any>

  constructor(private db:AngularFirestore) {
    this.refMessage = db.collection('messages');
   }

   getMessages(){
    return this.refMessage
   }

   sendMessage(message:any){
    const body ={
      text: "Hey how are you today?"
    }
    this.refMessage.add(body).them(() => {})
   }
}
