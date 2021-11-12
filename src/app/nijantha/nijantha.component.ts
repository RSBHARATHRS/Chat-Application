import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatDataService } from '../chat-data.service';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-nijantha',
  templateUrl: './nijantha.component.html',
  styleUrls: ['./nijantha.component.css']
})
export class NijanthaComponent implements OnInit, OnDestroy {

  lokeshDp: string;
  nijanthaDp: string;
  groupDp: string;
  bharathDp: string;
  myDp: string;
  date: Date = new Date();
  constructor(private imgPathservice: ImgPathService, private chatServeic: ChatDataService) {
    this.lokeshDp = imgPathservice.lokeshDp;
    this.nijanthaDp = imgPathservice.nijanthaDp;
    this.groupDp = imgPathservice.groupDp;
    this.bharathDp = imgPathservice.bharathDp;
    this.myDp = imgPathservice.nijanthaDp;
  }
  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.chatServeic.niLastSeen = this.date.toString().slice(0, -31);
  }

}
