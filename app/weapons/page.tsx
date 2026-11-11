import {PageIntro} from '@/components/Shell';
import Armory from '@/components/Armory';
export const metadata={title:'Weapon database — confirmed names',description:'Browse the 9 weapon names confirmed in the official Bloody Ragdoll Physics description. Full roster, damage and unlock details remain unverified.'};
export default function Page(){return <div className="page"><PageIntro tag="DATABASE / THE ARMORY" title="Choose your instrument.">23 weapons are advertised. These 9 names appear in the official description. Artwork is conceptual; damage, unlocks and exact models are not verified.</PageIntro><Armory/></div>}
