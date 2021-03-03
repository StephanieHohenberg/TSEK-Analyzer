import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {MergedContextData} from '../../../app/data/context.data';

export const CONTEXT_B159: MergedContextData[] = [];

export const B159: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b159',
    [GeneralPaperFields.TITLE]: 'Program Failures of Deep Learning Jobs',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Ru Zhang', 'Wencong Xiao', 'Hongyu Zhang',
      'Yu Liu', 'Haoxiang Lin', 'Mao Yang'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Microsoft Research', 'Alibaba Group', 'The University of Newcastle'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'manually examining failure messages',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.DL_NN]: 'DL',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B159]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: '+ "Discussion about Generality" Sektion',
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first study',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3, IterationGroup.C4 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
