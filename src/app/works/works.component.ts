import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'  
import { Observable } from 'rxjs/Observable';

import { WorkService } from './work.service';
import { Work } from './work';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})

export class WorksComponent implements OnInit{

  // works = [{
  //   "id": "work01",
  //   "name": "Project One Yes One",
  //   "image": "../assets/square1.png",
  //   "videoSrc": "https://player.vimeo.com/video/180495068"
  // }, {
  //   "id": "work02",
  //   "name": "Project Two Yes Two",
  //   "image": "../assets/square2.png",
  //   "videoSrc": "https://player.vimeo.com/video/180495068"
  // }, {
  //   "id": "work03",
  //   "name": "Project Three Yes Three",
  //   "image": "../assets/square3.png",
  //   "videoSrc": "https://player.vimeo.com/video/180495068"
  // }, {
  //   "id": "work04",
  //   "name": "Project Four Yes Four",
  //   "image": "../assets/square4.png",
  //   "videoSrc": "https://player.vimeo.com/video/180495068"
  // }]

//Create an observable that will pull in elements from WorkService
  works: Observable<Work[]>;
  constructor(private workService: WorkService) {

  }

  ngOnInit() {
    this.works = this.workService.findWorks();
  }
}


