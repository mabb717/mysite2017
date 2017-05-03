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

}