import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A678: MergedContextData[] = [];

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
