import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Vorkommen, Zweck} from '../../../app/data/context.data';

export const B209: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b209',
    [GeneralPaperFields.TITLE]: 'How to Not Get Rich: An Empirical Study of Donations in Open Source',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Cassandra Overney', 'Jens Meinicke', 'Christian Kästner', 'Bogdan Vasilescu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Olin College', 'Carnegie Mellon University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'GitHub',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EXPLORATORY_STUDY]: true,
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: true,
    [CharacterizationFields.APPLICATION_TARGET]: 'projects, donation platforms',
  },
  [AnalysisPaperFields.CONTEXTS]: [
  ],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new research questions',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
