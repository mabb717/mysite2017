// import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
// import {ActivatedRoute, Params} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule }   from '@angular/router';


// import { Observable } from 'rxjs/Observable';
import { Location }               from '@angular/common';

import { Work } from './work';
import { WorkService } from './work.service';



@Component({
	selector: 'work-detail',
	templateUrl: './work-detail.template.html',
	styleUrls: ['./work-detail.component.css'],
})
export class WorkDetailComponent {

	works: Array<Work>;
	selectedWork: Work;
	s: any;
	work: any;

	constructor(public workService: WorkService, public router: Router){
		this.works = this.workService.getWorks();
		this.router = router;
		let s = this.router.url;
		let workId = s.substring(s.lastIndexOf("/") + 1)
		this.work = this.works.filter(function(a){ return a.id == workId })[0]

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
