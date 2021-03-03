import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A469: MergedContextData[] = [];


export const A469: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a469',
    [GeneralPaperFields.TITLE]: 'ComboDroid: Generating High-Quality Test Inputs for Android Apps via Use Case Combinations',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Jue Wang', 'Yanyan Jiang', 'Chang Xu',
      'Chun Cao', 'Xiaoxing Ma', 'Jian Lu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Nanjing University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'framework',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: 'metrics',
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A469]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'internal',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'case',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C4
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC4,
      ],
  }
};

