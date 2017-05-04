import { Injectable } from '@angular/core';
import { Work } from '../works/work';

@Injectable()
export class WorkService {
    getWorks() {
        return [
        new Work( 'work01', 'Physics of Simone Biles', '../assets/biles.gif', '180495068', 'description 1', '754760'),
        new Work( 'work02', "Defending the planet", '../assets/lindley-desk.gif', '215919911', 'description 2', '963039'),
        new Work( 'work03', 'The human brain on LSD', '../assets/lsd.gif', '180493057', 'description 3', '661019'),
        new Work( 'work04', 'Paraplegics walk again', '../assets/paraplegic.gif', '215922333', 'description 4', '757516'),
        new Work( 'work05', 'The millennial whoop', '../assets/katyperry.gif', '215921646', 'description 5', '767812'),
        new Work( 'work06', 'Physics of Nathan Chen', '../assets/chen.gif', '215917304', 'description 6', '946104'),
        new Work( 'work07', 'Life on simulated Mars', '../assets/hiseas.gif', '180493055', 'description 7', '635323'),
        new Work( 'work08', 'Quitting fast fashion', '../assets/shopping.gif', '180495462', 'description 8', '686346'),
        new Work( 'work09', "NASA's real Mars mission", '../assets/marslife.gif', '151860501', 'description 9', '583429')
        ]
    }
}