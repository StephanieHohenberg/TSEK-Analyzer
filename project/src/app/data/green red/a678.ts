import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A678: MergedContextData[] = [
  {
    id: 'A678_S1',
    [ContextFields.LABEL]: 'Human Cognitive Processes',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'HUMAN_ASPECTS',
    [ContextFields.SUB]: ['A678_S1_1', 'A678_S1_2', 'A678_S1_3', 'A678_S1_4', 'A678_S1_5', 'A678_S1_6', 'A678_S1_7'],
  },
  {
    id: 'A678_S1_1',
    [ContextFields.LABEL]: 'Code Writing',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S1_2',
    [ContextFields.LABEL]: 'Prose Writing',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S1_3',
    [ContextFields.LABEL]: 'Code Comprehension',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S1_4',
    [ContextFields.LABEL]: 'Code Review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S1_5',
    [ContextFields.LABEL]: 'Data Structure Manipulation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S1_6',
    [ContextFields.LABEL]: 'Prose Review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S1_7',
    [ContextFields.LABEL]: 'in-the-wild Programming',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A678_S1',
  },
  {
    id: 'A678_S2',
    [ContextFields.LABEL]: 'C/C++',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'C++',
  },
];

export const A678 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a678',
    [GeneralPaperFields.TITLE]: 'Neurological Divide: An fMRI Study of Prose and Code Writing',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Ryan Krueger', 'Yu Huang', 'Xinyu Liu', 'Tyler Santander', 'Westley Weimer', 'Kevin Leach'],
    [GeneralPaperFields.UNIVERSITIES]: ['University of Michigan', 'Georgia Institute of Technology', 'UC Santa Barbara'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: true,
    [CharacterizationFields.EXPERIMENT]: 'brain scan',
    [CharacterizationFields.SURVEY]: true,
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A678 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.NO_CLAIM]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first human study',
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: 'limited',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
