import { Component } from '@angular/core';
import { Work } from './work';
import { WorkService } from './work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  works: Array<Work>;
  selectedWork: Work;

  constructor(public workService: WorkService){
    this.works = this.workService.getWorks();
  }

  select(work: Work) {
    this.selectedWork = work;
  }

detail = { 
    github: '../assets/github.svg',
    vimeo: '../assets/vimeo.svg',
    twitter: '../assets/twitter.svg',
    linkedin: '../assets/linkedin.svg',
    img: '../assets/me.png',
    name: "Michael Tabb is a reporter-animator obsessed with science and the future. He's currently based in New York City, working as a video journalist for Quartz."

  };  
}