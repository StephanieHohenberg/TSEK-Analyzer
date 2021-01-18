import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Vorkommen, Zweck} from '../../../app/data/context.data';

export const A210: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a210',
    [GeneralPaperFields.TITLE]: 'SLACC: Simion-based Language Agnostic Code Clones',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'George Mathew', 'Chris Parnin', 'Kathryn T Stolee',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'North Carolina State University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to an other tool',
  },
  [AnalysisPaperFields.CONTEXTS]: [
  ],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: 'kurz',
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C2_2 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
