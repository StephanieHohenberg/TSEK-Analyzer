import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A457: MergedContextData[] = [];


export const A457: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a457',
    [GeneralPaperFields.TITLE]: 'Multiple-Entry Testing of Android Applications by Constructing Activity Launching Contexts',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Jiwei Yan', 'Hao Liu', 'Linjie Pan',
      'Jun Yan', 'Jian Zhang', 'Bin Liang'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'University of Chinese Academy of Sciences', 'Bejing University of Technology', 'Renmin University of China'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'framework',
    [CharacterizationFields.BENCHMARK]: 'custom benchmark',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A457]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C2_2,
      IterationGroup.C4,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC4,
        AssumptionGroup.IC4,
      ],
  }
};

