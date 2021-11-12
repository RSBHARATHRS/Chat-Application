import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatDataService } from '../chat-data.service';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-bharath',
  templateUrl: './bharath.component.html',
  styleUrls: ['./bharath.component.css']
})
export class BharathComponent implements OnInit, OnDestroy {

  lokeshDp: string;
  nijanthaDp: string;
  groupDp: string;
  myDp: string;

  date: Date = new Date();
  constructor(private imgPathservice: ImgPathService, private chatServeic: ChatDataService) {
    this.lokeshDp = imgPathservice.lokeshDp;
    this.nijanthaDp = imgPathservice.nijanthaDp;
    this.groupDp = imgPathservice.groupDp;
    this.myDp = imgPathservice.bharathDp;
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.chatServeic.bhLastSeen = this.date.toString().slice(0, -31);
  }
}
