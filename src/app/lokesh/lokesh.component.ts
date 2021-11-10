import { Component, OnInit } from '@angular/core';
import { ImgPathService } from '../img-path.service';

@Component({
  selector: 'app-lokesh',
  templateUrl: './lokesh.component.html',
  styleUrls: ['./lokesh.component.css']
})
export class LokeshComponent implements OnInit {

  lokeshDp: string;
  nijanthaDp: string;

  constructor(private imgPathservice: ImgPathService) {
    this.lokeshDp = imgPathservice.lokeshDp;
    this.nijanthaDp = imgPathservice.nijanthaDp;
  }
  ngOnInit(): void {
  }

}
