import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Work } from './work';
import { WorkService } from './work.service';



@Component({
	selector: 'app-work-detail',
	templateUrl: './work-detail.template.html',
	styleUrls: ['./work-detail.component.css'],
})
export class WorkDetailComponent implements OnInit{
	private sub: any;
	private work: string[];


	constructor(
		private route: ActivatedRoute,
		private workService: WorkService
		) {}

	//subscribe to WorkService on init to get desired work according to id
	ngOnInit() {
		this.sub = this.route.params.subscribe(params =>{
			let id = params['id'];
			this.workService.findWorkById(id).subscribe(work => this.work = work)
		});
	}
}



