import { Component, OnInit } from '@angular/core';
import { ChatDataService } from 'src/app/chat-data.service';
import { ImgPathService } from 'src/app/img-path.service';

@Component({
  selector: 'app-b-nijantha',
  templateUrl: './b-nijantha.component.html',
  styleUrls: ['./b-nijantha.component.css']
})
export class BNijanthaComponent implements OnInit {

  senderName: string;
  senderDpPath: string;
  receiverName: string;
  receiverDp: string;
  imgPath: string;

  msgFlag: any;

  tempChatArr: any;
  niLastSeen: string;
  constructor(private chatService: ChatDataService, private imgPathService: ImgPathService) {
    this.senderName = "Bharath";
    this.senderDpPath = imgPathService.bharathDp;
    this.receiverDp = imgPathService.nijanthaDp;
    this.niLastSeen = chatService.niLastSeen;
    this.receiverName = "loki";
    this.imgPath = "";

    this.msgFlag = [];
    this.tempChatArr = chatService.bhAndNijanthanChat;
    console.log("b-loki constructor");
  }

  ngOnInit(): void {

  }

  send(msg: any) {
    let date: Date = new Date();
    console.log(date.toString().slice(16, -31));

    let msgObj = {
      senderName: "Bharath",
      senderDpPath: this.senderDpPath,
      msg: msg,
      time: date.toString().slice(16, -31)
    }

    this.tempChatArr.push(msgObj);

    console.log("pushed msg:", this.tempChatArr);
    this.chatService.upDatebhni(this.tempChatArr);
  }

}
