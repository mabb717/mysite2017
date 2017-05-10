import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.css'],
	styles: [`
	div {min-width:320px; font-family: 'Assistant', sans-serif;}
	nav {display: flex;   justify-content: center;}
	nav ul {list-style-type: none; display: flex; flex-flow: row wrap;margin: 0; padding: 0;}
	nav ul li {font-size: 1.25em; margin-top: -1.5em; padding: 0em 2.5em .5em 2.5em;cursor: pointer;display:inline-block; }
	.titleName {width: 100%; text-align:center;}
	h1{font-size:3em; font-family: 'Gravitas One', cursive; margin-top:-.5em;letter-spacing: .05em;}
	h2{font-size:1em; font-family: 'Gravitas One', cursive; margin-top:1.5em;letter-spacing: .4em;}
	#text1{color: #EA492F;}
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
	title1 = 'MICHAEL';
	title = 'TABB';

}
