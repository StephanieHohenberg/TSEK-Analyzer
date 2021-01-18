import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const A322: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a322',
    [GeneralPaperFields.TITLE]: 'Unblind Your Apps: Predicting Natural-Language Labels for Mobile GUI Components by Deep Learning',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Jieshan Chen', 'Chunyang Chen', 'Zhenchang Xing',
      'Xiwei Xu', 'Liming Zhu', 'Guoqiang Li',
      'Jinshui Wang'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Australian National University', 'Monash University',
      'Data61, CSIRO', 'Shanghai Jiao Tong University', 'Fujian University of Technology'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA, Continent.ASIA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'analysis of Android apps',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.DL_NN]: 'DL based model',
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: 'Generalization and Usefulness Evaluation',
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
