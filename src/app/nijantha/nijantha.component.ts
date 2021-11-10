import { Component, OnInit } from '@angular/core';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-nijantha',
  templateUrl: './nijantha.component.html',
  styleUrls: ['./nijantha.component.css']
})
export class NijanthaComponent implements OnInit {

  lokeshDp: string;
  nijanthaDp: string;
  groupDp: string;
  bharathDp: string;

  constructor(private imgPathservice: ImgPathService) {
    this.lokeshDp = imgPathservice.lokeshDp;
    this.nijanthaDp = imgPathservice.nijanthaDp;
    this.groupDp = imgPathservice.groupDp;
    this.bharathDp = imgPathservice.bharathDp;
  }
  ngOnInit(): void {
  }

}
