import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';
import { LokeshComponent } from 'src/app/lokesh/lokesh.component';

@Component({
  selector: 'app-b-lokesh',
  templateUrl: './b-lokesh.component.html',
  styleUrls: ['./b-lokesh.component.css']
})
export class BLokeshComponent implements OnInit {

  senderName: string;
  senderDpPath: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;

  msgFlag: any;

  bLoki: any;
  loLastSeen: string;

  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {

    this.loLastSeen = chatService.loLastSeen;
    this.senderName = "Bharath";
    this.senderDpPath = imgPathService.bharathDp;
    this.receiverDp = imgPathService.lokeshDp;
    this.receiverName = "loki";
    this.imgPath = "";

    this.msgFlag = [];
    this.bLoki = chatService.bhAndLokChat;
    console.log("b-loki constructor");
  }

  ngOnInit(): void {


  }


  send(msg: any) {
    let date: Date = new Date();
    console.log(date.toString().slice(16, -31));

    let msgObj = {
      senderName: this.senderName,
      senderDpPath: this.senderDpPath,
      msg: msg,
      time: date.toString().slice(16, -31)
    }

    this.bLoki.push(msgObj);

    console.log("pushed msg:", this.bLoki);
    this.chatService.upDatebhLo(this.bLoki);
  }



}
