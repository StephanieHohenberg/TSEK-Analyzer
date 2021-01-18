import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Vorkommen, Zweck} from '../../../app/data/context.data';

export const A234: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a234',
    [GeneralPaperFields.TITLE]: 'Securing UnSafe Rust Programs with XRust',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Peiming Liu', 'Gang Zhao', 'Jeff Huang',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Texas A&M university' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared with an other approach',
    [CharacterizationFields.APPLICATION_TARGET]: 'programs',
  },
  [AnalysisPaperFields.CONTEXTS]: [
  ],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new technique',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
