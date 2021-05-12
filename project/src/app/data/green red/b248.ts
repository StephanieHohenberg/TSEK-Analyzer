import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B248: MergedContextData[] = [
  {
    id: 'B248_S1',
    [ContextFields.LABEL]: 'Automatic Verification',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['B248_S1_1', 'B248_S1_2'],
  },
  {
    id: 'B248_S1_1',
    [ContextFields.LABEL]: 'Symbolic Excecution',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B248_S1',
  },
  {
    id: 'B248_S1_2',
    [ContextFields.LABEL]: 'Model Checking',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B248_S1',
  },
  {
    id: 'B248_S2',
    [ContextFields.LABEL]: 'High-Performance Computing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['B248_S2_1'],
    [ContextFields.PARENT]: 'SYSTEMS',
  },
  {
    id: 'B248_S2_1',
    [ContextFields.LABEL]: 'Message Passing Interface Programs (MPI)',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B248_S2_1_1', 'B248_S2_1_2'],
    [ContextFields.PARENT]: 'B248_S2',
  },
  {
    id: 'B248_S2_1_1',
    [ContextFields.LABEL]: 'with non-blocking operations',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B248_S2_1',
  },
  {
    id: 'B248_S2_1_2',
    [ContextFields.LABEL]: 'with non-deterministic operations',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'B248_S2_1',
  },
];

export const B248 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b248',
    [GeneralPaperFields.TITLE]: 'Symbolic Verification of Message Passing Interface Programs',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Hengbiao Yu', 'Zhenbang Chen', 'Xianjin Fu', 'Ji Wang', 'Zhendong Su', 'Jun Sun', 'Chun Huang', 'Wei Dong'],
    [GeneralPaperFields.UNIVERSITIES]: ['National University of Defense Technology', 'ETH Zurich', 'Singapore Management University'],
    [GeneralPaperFields.CONTINENTS]: [Continent.ASIA, Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'tool',
    [CharacterizationFields.EVALUATION]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B248 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first tool',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
