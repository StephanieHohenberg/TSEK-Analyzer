import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const A714: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a714',
    [GeneralPaperFields.TITLE]: 'ReluDiff: Differential Verification of Deep Neural Networks',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Brandon Paulsen', 'Jingbo Wang', 'Chao Wang',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of South Carolina' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'method',
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'DNN',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: [
  ],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: 'kurz',
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new method',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3, IterationGroup.C4 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
