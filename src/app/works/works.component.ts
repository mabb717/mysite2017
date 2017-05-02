import { Component } from '@angular/core';
import {Http, Response} from '@angular/http'  
// import 'rxjs/add/operator/map';

// import { WorkService } from './work.service';
// import { Work } from './work';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  // styles: ['  a {text-decoration:none; color: #262626; }']
  // providers: [WorkService]
})

export class WorksComponent {
  // result: Object;
  // constructor(http: Http) {
    //     this.result = {works:[]};
    //     http.get('../app/data/works.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
    // }

    works = [{
      "id": "work01",
      "name": "Project One Yes One",
      "image": "../assets/square1.png",
      "videoSrc": "https://player.vimeo.com/video/180495068"
    }, {
      "id": "work02",
      "name": "Project Two Yes Two",
      "image": "../assets/square2.png",
      "videoSrc": "https://player.vimeo.com/video/180495068"
    }, {
      "id": "work03",
      "name": "Project Three Yes Three",
      "image": "../assets/square3.png",
      "videoSrc": "https://player.vimeo.com/video/180495068"
    }, {
      "id": "work04",
      "name": "Project Four Yes Four",
      "image": "../assets/square4.png",
      "videoSrc": "https://player.vimeo.com/video/180495068"
    }]

  }
