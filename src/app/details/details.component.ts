import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  details = [
    { id: 1, name: 'This is my back story...' },
    { id: 2, name: 'There are lots of fun details in this story.' },
    { id: 3, name: 'Reach me on lots of platforms.' }
  ];

}