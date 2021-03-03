import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {MergedContextData} from '../../../app/data/context.data';

export const CONTEXT_A481: MergedContextData[] = [];

export const A481: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a481',
    [GeneralPaperFields.TITLE]: 'Time-travel Testing of Android Apps',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Zhen Dong', 'Marcel Böhme', 'Lucia Cojocaru', 'Abhik Roychoudhury'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'National University of Singapore', 'Monash University, Australia', 'Politehnica University of Bucharest'
    ],
    [GeneralPaperFields.CONTINENTS]: [
      Continent.ASIA, Continent.OCEANIA, Continent.EUROPE,
    ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.BENCHMARK]: 'AndroTest',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A481]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel approach',
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C4 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
