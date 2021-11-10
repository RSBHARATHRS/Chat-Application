import { Component, OnInit } from '@angular/core';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-bharath',
  templateUrl: './bharath.component.html',
  styleUrls: ['./bharath.component.css']
})
export class BharathComponent implements OnInit {

  lokeshDp: string;
  nijanthaDp: string;

  constructor(private imgPathservice: ImgPathService) {
    this.lokeshDp = imgPathservice.lokeshDp;
    this.nijanthaDp = imgPathservice.nijanthaDp;
  }

  ngOnInit(): void {
  }

}
