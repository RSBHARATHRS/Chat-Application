import { Component, OnInit, Input } from '@angular/core';
import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';

@Component({
  selector: 'app-b-lokesh',
  templateUrl: './b-lokesh.component.html',
  styleUrls: ['./b-lokesh.component.css']
})
export class BLokeshComponent implements OnInit {

  senderName: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;

  msgFlag: any;

  bLoki: any;
  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {
    this.senderName = "Bharath";
    this.receiverDp = imgPathService.lokeshDp;
    this.receiverName = "loki";
    this.imgPath = "";

    this.msgFlag = [];
    this.bLoki = chatService.bhAndLokChat;
    console.log("b-loki constructor");
  }

  ngOnInit(): void {
    console.log("on Init");

  }

  send(msg: any) {
    console.log("entered msg:", msg);
    let date = new Date();
    let msgObj = {
      senderName: "Bharath",
      msg: msg,
      date: date.getTime,
    }
    this.bLoki.push(msgObj);
    console.log("pushed msg:", this.bLoki);
    this.chatService.upDatebhLo(this.bLoki);
  }

}
