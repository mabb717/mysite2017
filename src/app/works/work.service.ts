import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Work } from './work'
import 'rxjs/add/operator/map';

@Injectable()
export class WorkService {

    constructor(private jsonp: Jsonp) { }

    private worksUrl = '../data/works.json';

    //get all my works by mapping entries to observable
    findWorks() {
        const endPoint = 'work.find'

        return this.jsonp
        .get(this.worksUrl + endPoint)
        .map(response => <Work[]> response.json().work);
    }

    //get individual works as needed according to id
    findWorkById(id: string){
        const endPoint = 'work.get'

        // Return response
        return this.jsonp
        .get(this.worksUrl + endPoint)
        .map(response => {

            console.log(response.json().work);
            return  response.json().work
        });
    }
}
// getWorks() {
//     return [
//     {
//         "id": "work01",
//         "name": "Project One Yes One",
//         "image": "../assets/square1.png",
//         "videoSrc": "https://player.vimeo.com/video/180495068"
//     }, {
//         "id": "work02",
//         "name": "Project Two Yes Two",
//         "image": "../assets/square2.png",
//         "videoSrc": "https://player.vimeo.com/video/180495068"
//     }, {
//         "id": "work03",
//         "name": "Project Three Yes Three",
//         "image": "../assets/square3.png",
//         "videoSrc": "https://player.vimeo.com/video/180495068"
//     }, {
//         "id": "work04",
//         "name": "Project Four Yes Four",
//         "image": "../assets/square4.png",
//         "videoSrc": "https://player.vimeo.com/video/180495068"
//     }
//     ]
// }

