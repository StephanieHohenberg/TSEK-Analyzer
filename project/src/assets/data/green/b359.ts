import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B359: MergedContextData[] = [];


export const B359: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b359',
    [GeneralPaperFields.TITLE]: 'CPC: Automatically Classifying and Propagating Natural Language Comments via Program Analysis',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Juan Zhai', 'Xiangzhe Xu', 'Yu Shi', 'Guanhong Tao',
      'Minxue Pan', 'Shiqing Ma', 'Lei Xu', 'Weifeng Zhang',
      'Lin Tan', 'Xiangyu Zhang'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Purdue University', 'Rutgers University', 'Nanjing University', 'Nanjing University of Posts and Telecommunications'],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'prototype',
    [CharacterizationFields.INSPECTION]: 'program analysis',
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.USER_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to other algorithms',
    [CharacterizationFields.DL_NN]: 'ML algorithms',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B359]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
      IterationGroup.C3,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_3,
      AssumptionGroup.AC3,
      AssumptionGroup.IC4,
    ],
  }
};

