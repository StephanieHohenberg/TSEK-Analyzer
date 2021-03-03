import {AnalysisPaperData} from '../../app/data/paper.data';
import {B535} from './gold/b535';
import {B159} from './gold/b159';
import {B110} from './gold/b110';
import {A949} from './gold/a949';
import {B435} from './gold/b435';
import {B171} from './gold/b171';
import {A481} from './gold/a481';
import {A309} from './gold/a309';
import {A322} from './gold/a322';
import {B073} from './gold/b073';
import {A691} from './gold/a691';
import {A654} from './gold/a654';
import {A087} from './gold/a087';
import {A210} from './red/a210';
import {B209} from './red/b209';
import {A714} from './red/a714';
import {A234} from './red/a234';
import {A641} from './green/a641';
import {B447} from './green/b447';
import {A469} from './green/a469';
import {A824} from './green/a824';
import {A752} from './green/a752';
import {A666} from './green/a666';
import {A493} from './green/a493';
import {A457} from './green/a457';
import {A566} from './green/a566';
import {B572} from './green/b572';
import {B483} from './green/b483';
import {A258} from './green/a258';
import {B183} from './green/b183';
import {A409} from './green/a409';
import {B348} from './green/b348';
import {A186} from './green/a186';
import {B359} from './green/b359';
import {B049} from './green red/b049';
import {A125} from './green red/a125';
import {A284} from './green red/a284';
import {B061} from './green red/b061';


export function getDataMap(): Map<string, AnalysisPaperData>{
  const map = new Map<string, AnalysisPaperData>();

  // TODO fills assumptions, context
  // and changes after iteration 3

  // gold
  map.set('b535', B535);
  map.set('a087', A087);
  map.set('a654', A654);
  map.set('a691', A691);
  map.set('b073', B073);
  map.set('a322', A322);
  map.set('a309', A309);
  map.set('a481', A481);
  map.set('b171', B171);
  map.set('b435', B435);
  map.set('a949', A949);
  map.set('b110', B110);
  map.set('b159', B159);

  // green red
  map.set('b061', B061);
  map.set('a284', A284);
  map.set('a125', A125);
  map.set('b049', B049);


  // green
  map.set('b447', B447);
  map.set('a469', A469);
  map.set('a186', A186);
  map.set('a824', A824);
  map.set('a752', A752);
  map.set('a666', A666);
  map.set('a493', A493);
  map.set('a457', A457);
  map.set('a566', A566);
  map.set('b572', B572);
  map.set('b483', B483);
  map.set('a258', A258);
  map.set('b183', B183);
  map.set('a409', A409);
  map.set('b359', B359);
  map.set('b348', B348);
  map.set('a641', A641);

  // red
  map.set('a210', A210);
  map.set('a714', A714);
  map.set('b209', B209);
  map.set('a234', A234);
  return map;
}
