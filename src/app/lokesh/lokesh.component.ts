import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatDataService } from '../chat-data.service';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-lokesh',
  templateUrl: './lokesh.component.html',
  styleUrls: ['./lokesh.component.css']
})
export class LokeshComponent implements OnInit, OnDestroy {

  lokeshDp: string;
  nijanthaDp: string;
  groupDp: string;
  bharathDp: string;
  myDp: string;
  date: Date = new Date();
  constructor(private imgPathservice: ImgPathService, private chatService: ChatDataService) {
    this.lokeshDp = imgPathservice.lokeshDp;
    this.nijanthaDp = imgPathservice.nijanthaDp;
    this.groupDp = imgPathservice.groupDp;
    this.bharathDp = imgPathservice.bharathDp;
    this.myDp = imgPathservice.lokeshDp;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.chatService.loLastSeen = this.date.toString().slice(0, -31);
  }
}
