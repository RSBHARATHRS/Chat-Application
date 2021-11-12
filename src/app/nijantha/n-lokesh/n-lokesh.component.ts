import { Component, OnInit } from '@angular/core';
import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';

@Component({
  selector: 'app-n-lokesh',
  templateUrl: './n-lokesh.component.html',
  styleUrls: ['./n-lokesh.component.css']
})
export class NLokeshComponent implements OnInit {




  senderName: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;

  msgFlag: any;
  loLastSeen: string;
  bLoki: any;
  senderDpPath: string;
  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {
    this.senderName = "nijantha";
    this.receiverDp = imgPathService.lokeshDp;
    this.senderDpPath = imgPathService.nijanthaDp;
    this.receiverName = "loki";
    this.imgPath = "";
    this.loLastSeen = chatService.loLastSeen;
    this.msgFlag = [];
    this.bLoki = chatService.niAndLokichat;
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
    this.chatService.upDatenilo(this.bLoki);
  }
}
