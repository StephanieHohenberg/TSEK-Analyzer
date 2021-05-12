import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B410: MergedContextData[] = [
  {
    id: 'B410_S1',
    [ContextFields.LABEL]: 'Test Input Generation',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.SUB]: ['B410_S1_1', 'B410_S1_2', 'B410_S1_3', 'B410_S1_4', 'B410_S1_5'],
  },
  {
    id: 'B410_S1_1',
    [ContextFields.LABEL]: 'Property-based Testing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B410_S1',
  },
  {
    id: 'B410_S1_2',
    [ContextFields.LABEL]: 'Reinforcement Learning',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B410_S1',
  },
  {
    id: 'B410_S1_3',
    [ContextFields.LABEL]: 'Symbolic Execution',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B410_S1',
  },
  {
    id: 'B410_S1_4',
    [ContextFields.LABEL]: 'Fuzz Testing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B410_S1',
  },
  {
    id: 'B410_S1_5',
    [ContextFields.LABEL]: 'Search-based Software Testing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B410_S1',
  },
];

export const B410 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b410',
    [GeneralPaperFields.TITLE]: 'Quickly Generating Diverse Valid Test Inputs with Reinforcement Learning',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Sameer Reddy', 'Caroline Lemieux', 'Rohan Padhye', 'Koushik Sen'],
    [GeneralPaperFields.UNIVERSITIES]: ['University of California, Berkeley'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'Reinforcement Learning',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B410 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
