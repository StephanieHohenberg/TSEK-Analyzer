import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_A322: MergedContextData[] = [
  {
    id: 'A322_S1_1',
    [ContextFields.LABEL]: 'Android Applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'ANDROID_APPLICATIONS',
  },
  {
    id: 'A322_S2',
    [ContextFields.LABEL]: 'Application Properties',
    [ContextFields.PARENT]: 'MOBILE_APPLICATIONS',
    [ContextFields.SUB]: ['A322_S2_1', 'A322_S2_2', 'A322_S2_3', 'A322_S2_4', 'A322_S2_5', 'A322_S2_6', 'A322_S2_7', 'A322_S2_8', 'A322_S2_9'],
  },
  {
    id: 'A322_S2_1',
    [ContextFields.LABEL]: 'GUI design',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_2',
    [ContextFields.LABEL]: 'accessibility',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_3',
    [ContextFields.LABEL]: 'compatibility',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_4',
    [ContextFields.LABEL]: 'performance',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_5',
    [ContextFields.LABEL]: 'energy efficiency',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_6',
    [ContextFields.LABEL]: 'GUI animation linting',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_7',
    [ContextFields.LABEL]: 'localization',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_8',
    [ContextFields.LABEL]: 'privacy',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
  {
    id: 'A322_S2_9',
    [ContextFields.LABEL]: 'security',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A322_S2',
  },
];

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
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A322]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: 'Generalization and Usefulness Evaluation',
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
