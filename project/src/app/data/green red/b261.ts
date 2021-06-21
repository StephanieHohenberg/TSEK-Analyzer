import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B261: MergedContextData[] = [
  {
    id: 'B261_S1',
    [ContextFields.LABEL]: 'Numerical Bugs',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A765_S2',
  },
  {
    id: 'B261_S2',
    [ContextFields.LABEL]: 'Numerical Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PROGRAMS',
    [ContextFields.SUB]: ['B261_S2_1', 'B261_S2_2'],
  },
  {
    id: 'B261_S2_1',
    [ContextFields.LABEL]: 'Floating-Point  Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B261_S2',
  },
  {
    id: 'B261_S2_2',
    [ContextFields.LABEL]: 'Computation and Statistics Libraries',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B261_S2',
  },
  {
    id: 'B261_S3_1',
    [ContextFields.LABEL]: 'Test Data Generation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'BUG_DETECTION',
  },
  {
    id: 'B261_S3_2',
    [ContextFields.LABEL]: 'Input Generation',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'BUG_DETECTION',
    [ContextFields.SUB]: ['B261_S3_2_1']
  },
  {
    id: 'B261_S3_2_1',
    [ContextFields.LABEL]: 'Symbolic Execution',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B261_S3_2',
  },
  {
    id: 'B261_S3_3',
    [ContextFields.LABEL]: 'Dynamic Analysis',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'BUG_DETECTION',
  },
];

export const B261 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b261',
    [GeneralPaperFields.TITLE]: 'Efficient Generation of Error-Inducing Floating-Point Inputs via Symbolic Execution',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Hui Guo', 'Cindy Rubio-González'],
    [GeneralPaperFields.UNIVERSITIES]: ['University of California'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'tool',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'technique',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B261 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
