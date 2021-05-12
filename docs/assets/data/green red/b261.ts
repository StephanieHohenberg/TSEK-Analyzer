import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B261: MergedContextData[] = [
  {
    id: 'A335_S1',
    [ContextFields.LABEL]: 'Numerical Bugs',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
  },
  {
    id: 'A335_S2',
    [ContextFields.LABEL]: 'Numerical Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.SUB]: ['A335_S2_1', 'A335_S2_2'],
  },
  {
    id: 'A335_S2_1',
    [ContextFields.LABEL]: 'Floating-Point  Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A335_S2',
  },
  {
    id: 'A335_S2_2',
    [ContextFields.LABEL]: 'Computation and Statistics Libraries',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A335_S2',
  },
  {
    id: 'A335_S3_1',
    [ContextFields.LABEL]: 'Test Data Generation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'BUG_DETECTION',
  },
  {
    id: 'A335_S3_2',
    [ContextFields.LABEL]: 'Input Generation',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'BUG_DETECTION',
    [ContextFields.SUB]: ['A335_S3_2_1']
  },
  {
    id: 'A335_S3_2_1',
    [ContextFields.LABEL]: 'Symbolic Execution',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A335_S3_2',
  },
  {
    id: 'A335_S3_3',
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
