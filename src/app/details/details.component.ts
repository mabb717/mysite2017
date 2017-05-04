import { Component } from '@angular/core';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {

	detail = { 
		resume: '../assets/resume.svg',
		email: '../assets/email.svg',
		twitter: '../assets/twitter.svg',
		linkedin: '../assets/linkedin.svg',
		img: '../assets/square1.png',
		name: 'This is my back story...',

	};

}