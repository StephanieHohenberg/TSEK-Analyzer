import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A271: MergedContextData[] = [];

export const A271 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a271',
    [GeneralPaperFields.TITLE]: 'SAVER: Scalable, Precise, and Safe Memory-Error Repair',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Seongjoon Hong', 'Junhee Lee', 'Jeongsoo Lee', 'Hakjoo Oh'],
    [GeneralPaperFields.UNIVERSITIES]: ['Korea University'],
    [GeneralPaperFields.CONTINENTS]: [Continent.ASIA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A271 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: 'short',
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.NO_CLAIM]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new technique',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'open-source programs',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
