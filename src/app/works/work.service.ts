import { Injectable } from '@angular/core';
import { Work } from '../works/work';

@Injectable()
export class WorkService {
    getWorks() {
        return [
        new Work( 'work01', 'Physics of Simone Biles', '../assets/biles.gif', '180495068', "Simone Biles pushes the laws of physics to prove she is the greatest gymnast ever. But there's a limit.", '754760'),
        new Work( 'work02', "Defending the planet", '../assets/lindley-desk.gif', '215919911', "NASA's planetary defense officer has a nearly impossible job—save everyone from an asteroid impact.", '963039'),
        new Work( 'work03', 'The human brain on LSD', '../assets/lsd.gif', '180493057', 'When they scanned participants on LSD, researchers saw a more "unified brain."', '661019'),
        new Work( 'work04', 'Paraplegics walk again', '../assets/paraplegic.gif', '215922333', 'With an assist from VR, paraplegics can regain some sensory movement.', '757516'),
        new Work( 'work05', 'The millennial whoop', '../assets/katyperry.gif', '215921646', 'Once you hear the "millennial whoop," you will hear it everywhere.', '767812'),
        new Work( 'work06', 'Physics of Nathan Chen', '../assets/chen.gif', '215917304', 'When he can conquer his nerves, Nathan Chen does more stunning jumps than any other figure skater.', '946104'),
        new Work( 'work07', 'Life on simulated Mars', '../assets/hiseas.gif', '180493055', "Getting humans to the red planet is just part of the puzzle. Keeping the crew there sane is another.", '635323'),
        new Work( 'work08', 'Quitting fast fashion', '../assets/shopping.gif', '180495462', 'Buying cheap clothes that clog up your closet is a terrible life choice.', '686346'),
        new Work( 'work09', "NASA's real Mars mission", '../assets/marslife.gif', '151860501', "This is what scientists are really looking for on Earth's closest neighbor", '583429')
        ]
    }
}