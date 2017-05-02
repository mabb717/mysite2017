import { Injectable } from '@angular/core';

@Injectable()
export class WorkService {
    getWorks() {
        return [
        {
            "id": "work01",
            "name": "Project One Yes One",
            "image": "../assets/square1.png",
            "videoSrc": "https://player.vimeo.com/video/180495068"
        }, {
            "id": "work02",
            "name": "Project Two Yes Two",
            "image": "../assets/square2.png",
            "videoSrc": "https://player.vimeo.com/video/180495068"
        }, {
            "id": "work03",
            "name": "Project Three Yes Three",
            "image": "../assets/square3.png",
            "videoSrc": "https://player.vimeo.com/video/180495068"
        }, {
            "id": "work04",
            "name": "Project Four Yes Four",
            "image": "../assets/square4.png",
            "videoSrc": "https://player.vimeo.com/video/180495068"
        }
        ]
    }
}