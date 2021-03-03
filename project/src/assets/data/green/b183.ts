import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B183: MergedContextData[] = [];


export const B183: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b183',
    [GeneralPaperFields.TITLE]: 'Mitigating Turnover with Code Review Recommendation: Balancing Expertise, Workload, and Knowledge Distribution',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Ehsan Mirsaeedi', 'Peter C. Rigby'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Concordia University, Montréal' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'recommender',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.SIMULATION]: true,
    [CharacterizationFields.INTERVIEW]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B183]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'a novel evaluation framework for reviewer recommenders',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'selected projects',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_3,
      ],
  }
};

