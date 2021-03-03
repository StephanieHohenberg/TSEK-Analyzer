import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A258: MergedContextData[] = [];


export const A258: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a258',
    [GeneralPaperFields.TITLE]: 'Burn After Reading: A Shadow Stack with Microsecond-level Runtime Rerandomization for Protecting Return Addresses',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Changwei Zou', 'Jingling Xue'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'UNSW Sydney' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'mechanism',
    [CharacterizationFields.BENCHMARK]: 'C/C++',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A258]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first shadow stack mechanism',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.IC1
    ],
  }
};

