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

  // green

  // red
  map.set('a210', A210);
  map.set('a714', A714);
  map.set('b209', B209);
  map.set('a234', A234);
  return map;
}
