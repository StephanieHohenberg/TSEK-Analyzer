import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_A949: MergedContextData[] = [
  {
    id: 'A949_1',
    [ContextFields.LABEL]: 'Fairness Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'TESTING'
  },
  {
    id: 'A949_S2_1',
    [ContextFields.LABEL]: 'applications with societal impact',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS'
  },
  {
    id: 'A949_S3',
    [ContextFields.LABEL]: 'Convolutional Neural Networks',
    [ContextFields.PARENT]: 'CNN',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
];

export const A949: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a949',
    [GeneralPaperFields.TITLE]: 'White-box Fairness Testing through Adversarial Sampling',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Peixin Zhang', 'Jingyi Wang', 'Jun Sun',
      'Guoliang Dong', 'Xinyu Wang', 'Xingen Wang',
      'Jin Song Dong', 'Ting Dai',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Zhejiang University', 'National University of Singapore',
      'Singapore Management University', 'Huawei Internation Pte. Ltd'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'DNN',
    [CharacterizationFields.TESTING]: true,
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A949]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3, IterationGroup.C4],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
