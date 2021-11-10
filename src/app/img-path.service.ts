import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImgPathService {

  bharathDp: string;
  lokeshDp: string;
  nijanthaDp: string;
  constructor() {
    this.bharathDp = "assets/b.jpg";
    this.lokeshDp = "assets/l.jpg";
    this.nijanthaDp = "assets/n.jpg";
  }
}
