import { Component, OnInit } from '@angular/core';
import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';

@Component({
  selector: 'app-l-nijantha',
  templateUrl: './l-nijantha.component.html',
  styleUrls: ['./l-nijantha.component.css']
})
export class LNijanthaComponent implements OnInit {



  senderName: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;
  senderDpPath: string;
  msgFlag: any;

  bLoki: any;
  niLastSeen: string;
  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {
    this.senderName = "nijantha";
    this.receiverDp = imgPathService.nijanthaDp;
    this.senderDpPath = imgPathService.lokeshDp;
    this.receiverName = "loki";
    this.imgPath = "";
    this.niLastSeen = chatService.niLastSeen;
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
      date: date.getTime,
    }
    this.bLoki.push(msgObj);
    console.log("pushed msg:", this.bLoki);
    this.chatService.upDatenilo(this.bLoki);
  }

}
