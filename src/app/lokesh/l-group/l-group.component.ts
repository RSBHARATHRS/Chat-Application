import { Component, OnInit } from '@angular/core';
import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';

@Component({
  selector: 'app-l-group',
  templateUrl: './l-group.component.html',
  styleUrls: ['./l-group.component.css']
})
export class LGroupComponent implements OnInit {

  senderName: string;
  senderDpPath: string;
  groupDp: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;

  msgFlag: any;

  groupArr: any;
  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {
    this.senderName = "lokesh";
    this.senderDpPath = imgPathService.lokeshDp;
    this.receiverDp = imgPathService.lokeshDp;
    this.groupDp = imgPathService.groupDp;
    this.receiverName = "loki";
    this.imgPath = "";

    this.msgFlag = [];
    this.groupArr = chatService.groupChat;
    console.log("b-loki constructor");
  }

  ngOnInit(): void {
    console.log("on Init");

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
    this.groupArr.push(msgObj);

    console.log("pushed msg:", this.groupArr);
    this.chatService.upDatebhLo(this.groupArr);
  }



}
