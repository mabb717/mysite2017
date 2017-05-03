import { Injectable } from '@angular/core';
import { Work } from '../works/work';

@Injectable()
export class WorkService {
    getWorks() {
        return [
        new Work( 'work01', 'Project One Yes One', '../assets/square1.png', '180495068', 'description 1'),
        new Work( 'work02', 'Project Two Yes Two', '../assets/square2.png', '180495462', 'description 2'),
        new Work( 'work03', 'Project Three Yes Three', '../assets/square3.png', '180495068', 'description 3'),
        new Work( 'work04', 'Project Four Yes Four', '../assets/square4.png', '180495462', 'description 4')
        ]
    }
}