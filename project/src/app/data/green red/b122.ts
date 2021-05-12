import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B122: MergedContextData[] = [
  {
    id: 'B122_S1',
    [ContextFields.LABEL]: 'Testing DNN',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.SUB]: ['B122_S1_1', 'B122_S1_2'],
  },
  {
    id: 'B122_S1_1',
    [ContextFields.LABEL]: 'Testing DNN Image Classifiers',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B122_S1',
    [ContextFields.SUB]: ['B122_S1_1_1'],
  },
  {
    id: 'B122_S1_1_1',
    [ContextFields.LABEL]: 'automated error detection of class-based confusion and bias errors', // class property violations
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B122_S1_1',
  },
  {
    id: 'B122_S1_2',
    [ContextFields.LABEL]: 'Software Testing & Verification of DNNs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B122_S1',
    [ContextFields.SUB]: ['B122_S1_2_1', 'B122_S1_2_2', 'B122_S1_2_3'],
  },
  {
    id: 'B122_S1_2_1',
    [ContextFields.LABEL]: 'Adversarial Deep Learning',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B122_S1_2',
  },
  {
    id: 'B122_S1_2_2',
    [ContextFields.LABEL]: 'Interpreting DNNs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B122_S1_2',
  },
  {
    id: 'B122_S1_2_3',
    [ContextFields.LABEL]: 'Evaluation Models Bias / Fairness',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B122_S1_2',
  },
  {
    id: 'B122_S2',
    [ContextFields.LABEL]: 'Computer Vision', // TODO
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.SUB]: ['B122_S2_1'],
  },
  {
    id: 'B122_S2_1',
    [ContextFields.LABEL]: 'Image Classification',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2',
    [ContextFields.SUB]: ['B122_S2_1_1', 'B122_S2_1_2'],
  },
  {
    id: 'B122_S2_1_1',
    [ContextFields.LABEL]: 'Consumer Applications',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2_1',
    [ContextFields.SUB]: ['B122_S2_1_1_1', 'B122_S2_1_1_2'],
  },
  {
    id: 'B122_S2_1_1_1',
    [ContextFields.LABEL]: 'google photo search',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2_1_1',
  },
  {
    id: 'B122_S2_1_1_2',
    [ContextFields.LABEL]: 'facebook image tagging',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2_1_1',
  },
  {
    id: 'B122_S2_1_2',
    [ContextFields.LABEL]: 'Safety-Critical Domains',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2_1',
    [ContextFields.SUB]: ['B122_S2_1_2_1', 'B122_S2_1_2_2'],
  },
  {
    id: 'B122_S2_1_2_1',
    [ContextFields.LABEL]: 'self driving cars',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2_1_2',
  },
  {
    id: 'B122_S2_1_2_2',
    [ContextFields.LABEL]: 'medical diagnosis',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B122_S2_1_2',
  },
  {
    id: 'B122_3',
    [ContextFields.LABEL]: 'DNN-driven image software',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['B122_S1_1'],
  },
];

export const B122 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b122',
    [GeneralPaperFields.TITLE]: 'Testing DNN Image Classifiers for Confusion & Bias Errors',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Yuchi Tian', 'Ziyuan Zhong', 'Vicente Ordonez', 'Gail Kaiser', 'Baishakhi Ray'],
    [GeneralPaperFields.UNIVERSITIES]: ['Columbia University', 'University of Virginia'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B122 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: 'listing the limitations',
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: '6 datasets under 8 settings',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
