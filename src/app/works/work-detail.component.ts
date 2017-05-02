import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

// import { Work } from './work';
// import { WorkService } from './work.service';



@Component({
	selector: 'app-work-detail',
	templateUrl: './work-detail.template.html',
	styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent {
	// work: Work;

	// constructor(
	// 	private route: ActivatedRoute,
	// 	private router: Router,
	// 	private workService: WorkService
	// 	)


 //    ngOnInit() {
 //        let id = +this.route.snapshot.params['id'];
 //        this._workService.getOne(id).then(work => this.work = work);
 //    }


	// {}

	// ngOnInit(){
	// 	this.route.params
	// 	.map(params => params['id'])
	// 	.subscribe((id) => {
	// 		this.workService
	// 		.getWork(id)
	// 		.subscribe(work => this.work = work);
	// 	});
	// }
}






	// import { Component } from '@angular/core';
	// // import { WorkService } from '../works/work.service';
	// // import { Observable } from 'rxjs/Observable';
	// import { Routes, RouterModule } from '@angular/router';
	// import 'rxjs/add/operator/map';


	// // import { Work } from '../works/work';
	// import { Http } from "@angular/http";
	// // import { WorksComponent } from '/works.component';
	// // import 'rxjs/Rx';

	// @Component({
		// 	selector: 'app-work-detail',
		// 	templateUrl: './work-detail.template.html',
		// 	styleUrls: ['./work-detail.component.css']
		// })
		// export class WorkDetailComponent {

			// 	constructor(public http: Http) {}

			// 	works = [{
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
							// 	// data;
							// 	// constructor(private http:Http){
								// 		// 	http.get('../data/' + routeParams.workId +  '.json')
								// 		// 	.then(response => {
									// 			// 		this.work = response.data;
									// 			// 	});
									// 			// }


									// 			// data;
									// 			// constructor(private http:Http){
										// 				// 	this.http.get('../app/data/work' + "01" + '.json')
										// 				// 	.subscribe(res => this.data = res.json());
										// 				// }
// }