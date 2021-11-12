import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {

  bhAndLokChat: any;
  bhAndNijanthanChat: any;
  groupChat: any;
  niAndLokichat: any;

  constructor() {
    console.log("Chat service");

    this.bhAndLokChat = [];
    this.bhAndNijanthanChat = [];
    this.groupChat = [];
    this.niAndLokichat = [];
  }

  upDatebhLo(tempArr: any) {
    this.bhAndLokChat = tempArr;
  }

  upDatebhni(tempArr: any) {
    this.bhAndNijanthanChat = tempArr;
  }

  upDatenilo(tempArr: any) {
    this.niAndLokichat = tempArr;
  }

  upDategroup(tempArr: any) {
    this.groupChat = tempArr;
  }
}
