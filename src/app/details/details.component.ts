import { Component } from '@angular/core';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {

	detail = { 
		github: '../assets/github.svg',
		vimeo: '../assets/vimeo.svg',
		twitter: '../assets/twitter.svg',
		linkedin: '../assets/linkedin.svg',
		img: '../assets/me.jpg',
		name: "Michael Tabb is a reporter-animator obsessed with science and the future. He's currently based in New York City, working as a video journalist for Quartz."

	};

}