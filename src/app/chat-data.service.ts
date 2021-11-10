import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {

  bhAndLokChat: any;
  bhAndNijanthanChat: any;
  groupChat: any;

  constructor() {
    console.log("Chat service");

    this.bhAndLokChat = [];
    this.bhAndNijanthanChat = [];
    this.groupChat = [];
  }

  upDatebhLo(tempArr: any) {
    this.bhAndLokChat = tempArr;
  }
}
