import { Component, OnInit } from '@angular/core';
import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';

@Component({
  selector: 'app-n-bharath',
  templateUrl: './n-bharath.component.html',
  styleUrls: ['./n-bharath.component.css']
})
export class NBharathComponent implements OnInit {

  senderName: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;

  msgFlag: any;

  bLoki: any;
  bhLastSeen: string;
  senderDpPath: string;
  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {
    this.senderName = "nijantha";
    this.senderDpPath = imgPathService.nijanthaDp;
    this.receiverDp = imgPathService.bharathDp;
    this.receiverName = "loki";
    this.imgPath = "";
    this.bhLastSeen = chatService.bhLastSeen;
    this.msgFlag = [];
    this.bLoki = chatService.bhAndNijanthanChat;
    console.log("b-loki constructor");
  }

  ngOnInit(): void {
    console.log("on Init");

  }

  send(msg: any) {
    console.log("entered msg:", msg);
    let date = new Date();
    let msgObj = {
      senderName: this.senderName,
      senderDpPath: this.senderDpPath,
      msg: msg,
      time: date.toString().slice(16, -31)
    }
    this.bLoki.push(msgObj);
    console.log("pushed msg:", this.bLoki);
    this.chatService.upDatebhni(this.bLoki);
  }

}
