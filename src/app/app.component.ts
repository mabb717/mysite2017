import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.css'],
	styles: [`
	div {min-width:320px; font-family: 'Assistant', sans-serif;}
	nav {display: flex;   justify-content: center;}
	nav ul {list-style-type: none; display: flex; flex-flow: row wrap;margin: 0; padding: 0;}
	nav ul li {font-size: 1.25em; padding: .5em 2.5em .5em 2.5em;cursor: pointer;display:inline-block; }
	img.titleImage {margin-top: 1em;height: 1.75em; width: 100%; align:center; padding-right:2em;}
	a {text-decoration:none; color: #262626; 
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
		supported by Chrome and Opera */
	}
	a:active {color: #EA492F}
	.active-link {color: #EA492F}

	`],
})

export class AppComponent {
	title = '../assets/name.svg';
}
