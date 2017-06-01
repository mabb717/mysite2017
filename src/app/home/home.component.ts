import { Component} from '@angular/core';
// import { DetailsComponent } from '../details/details.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {

	home = '../assets/astronaut.gif';
	detail = { 
		github: '../assets/github.svg',
		vimeo: '../assets/vimeo.svg',
		twitter: '../assets/twitter.svg',
		linkedin: '../assets/linkedin.svg',
		img: '../assets/me.png',
		name: "Michael Tabb is a reporter-animator obsessed with science and the future. He's currently based in New York City, working as a video journalist for Quartz."

	};	// works: Array<Work>;



}