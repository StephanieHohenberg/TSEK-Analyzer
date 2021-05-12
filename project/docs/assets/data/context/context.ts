import {ContextData} from '../../../app/data/context.data';
import {CONTEXT_A641} from '../green/a641';
import {CONTEXT_B171} from '../gold/b171';
import {getContextData} from './context.util';
import {CONTEXT_B447} from '../green/b447';
import {CONTEXT_A469} from '../green/a469';
import {CONTEXT_A186} from '../green/a186';
import {CONTEXT_A824} from '../green/a824';
import {CONTEXT_A752} from '../green/a752';
import {CONTEXT_A666} from '../green/a666';
import {CONTEXT_A493} from '../green/a493';
import {CONTEXT_A457} from '../green/a457';
import {CONTEXT_A566} from '../green/a566';
import {CONTEXT_B572} from '../green/b572';
import {CONTEXT_B483} from '../green/b483';
import {CONTEXT_A258} from '../green/a258';
import {CONTEXT_B183} from '../green/b183';
import {CONTEXT_A409} from '../green/a409';
import {CONTEXT_B359} from '../green/b359';
import {CONTEXT_B348} from '../green/b348';
import {CONTEXT_A210} from '../red/a210';
import {CONTEXT_A714} from '../red/a714';
import {CONTEXT_B209} from '../red/b209';
import {CONTEXT_A234} from '../red/a234';
import {CONTEXT_B535} from '../gold/b535';
import {CONTEXT_A087} from '../gold/a087';
import {CONTEXT_A654} from '../gold/a654';
import {CONTEXT_A691} from '../gold/a691';
import {CONTEXT_B073} from '../gold/b073';
import {CONTEXT_A322} from '../gold/a322';
import {CONTEXT_A309} from '../gold/a309';
import {CONTEXT_A481} from '../gold/a481';
import {CONTEXT_B435} from '../gold/b435';
import {CONTEXT_A949} from '../gold/a949';
import {CONTEXT_B110} from '../gold/b110';
import {CONTEXT_B159} from '../gold/b159';
import {CONTEXT_B061} from '../green red/b061';
import {CONTEXT_A284} from '../green red/a284';
import {CONTEXT_A125} from '../green red/a125';
import {CONTEXT_B049} from '../green red/b049';
import {CONTEXT_B273} from '../green red/b273';
import {CONTEXT_A335} from '../green red/a335';
import {CONTEXT_B261} from '../green red/b261';
import {CONTEXT_B024} from '../green red/b024';
import {CONTEXT_A615} from '../green red/a615';
import {CONTEXT_B410} from '../green red/b410';
import {CONTEXT_A026} from '../green red/a026';
import {CONTEXT_A542} from '../green red/a542';
import {CONTEXT_A075} from '../green red/a075';
import {CONTEXT_A530} from '../green red/a530';
import {CONTEXT_B459} from '../green red/b459';
import {CONTEXT_A765} from '../green red/a765';
import {CONTEXT_B248} from '../green red/b248';
import {CONTEXT_A271} from '../green red/a271';
import {CONTEXT_A678} from '../green red/a678';
import {CONTEXT_A986} from '../green red/a986';
import {CONTEXT_B122} from '../green red/b122';
import {CONTEXT_B135} from '../green red/b135';
import {CONTEXT_B509} from '../green red/b509';
import {CONTEXT_B098} from '../green red/b098';
import {CONTEXT_B086} from '../green red/b086';
import {SHARED_CONTEXT} from './shared-context';

export function getContextMap(): Map<string, ContextData> {
  const map = new Map<string, ContextData>();
  const data: ContextData[][] = getContextDataOfAllPapers();

  data.forEach(contextDataForPaper => {
    contextDataForPaper.forEach(contextData => {
      if (map.has(contextData.id)) {
        console.warn(`contextDataMap already has a context with the id: ${contextData.id}`);
      }
      map.set(contextData.id, contextData);
    });
  });
  return map;
}

function getContextDataOfAllPapers(): ContextData[][] {
  const goldContext = [
    getContextData([...CONTEXT_B535]),
    getContextData([...CONTEXT_A087]),
    getContextData([...CONTEXT_A654]),
    getContextData([...CONTEXT_A691]),
    getContextData([...CONTEXT_B073]),
    getContextData([...CONTEXT_A322]),
    getContextData([...CONTEXT_A309]),
    getContextData([...CONTEXT_A481]),
    getContextData([...CONTEXT_B171]),
    getContextData([...CONTEXT_B435]),
    getContextData([...CONTEXT_A949]),
    getContextData([...CONTEXT_B110]),
    getContextData([...CONTEXT_B159]),
  ];

  // green red
  const greenRedContext = [
    getContextData([...CONTEXT_B273]),
    getContextData([...CONTEXT_A335]),
    getContextData([...CONTEXT_B261]),
    getContextData([...CONTEXT_B024]),
    getContextData([...CONTEXT_A615]),
    getContextData([...CONTEXT_B410]),
    getContextData([...CONTEXT_A026]),
    getContextData([...CONTEXT_A542]),
    getContextData([...CONTEXT_A075]),
    getContextData([...CONTEXT_A530]),
    getContextData([...CONTEXT_B459]),
    getContextData([...CONTEXT_A765]),
    getContextData([...CONTEXT_B248]),
    getContextData([...CONTEXT_A271]),
    getContextData([...CONTEXT_A678]),
    getContextData([...CONTEXT_A986]),
    getContextData([...CONTEXT_B122]),
    getContextData([...CONTEXT_B135]),
    getContextData([...CONTEXT_B509]),
    getContextData([...CONTEXT_B098]),
    getContextData([...CONTEXT_B086]),
    getContextData([...CONTEXT_B049]),
    getContextData([...CONTEXT_A125]),
    getContextData([...CONTEXT_A284]),
    getContextData([...CONTEXT_B061]),
  ];

  const greenContext = [
    getContextData([...CONTEXT_B447]),
    getContextData([...CONTEXT_A469]),
    getContextData([...CONTEXT_A186]),
    getContextData([...CONTEXT_A824]),
    getContextData([...CONTEXT_A752]),
    getContextData([...CONTEXT_A666]),
    getContextData([...CONTEXT_A493]),
    getContextData([...CONTEXT_A457]),
    getContextData([...CONTEXT_A566]),
    getContextData([...CONTEXT_B572]),
    getContextData([...CONTEXT_B483]),
    getContextData([...CONTEXT_A258]),
    getContextData([...CONTEXT_B183]),
    getContextData([...CONTEXT_A409]),
    getContextData([...CONTEXT_B359]),
    getContextData([...CONTEXT_B348]),
    getContextData([...CONTEXT_A641]),
  ];

  const redContext = [
    getContextData([...CONTEXT_A210]),
    getContextData([...CONTEXT_A714]),
    getContextData([...CONTEXT_B209]),
    getContextData([...CONTEXT_A234]),
  ];
  return [
    ...goldContext,
    ...greenRedContext,
    ...greenContext,
    ...redContext,
    getContextData([...SHARED_CONTEXT]),
  ];
}
