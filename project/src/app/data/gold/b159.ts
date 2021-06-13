import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_B159: MergedContextData[] = [
  {
    id: 'B159_S1_1',
    [ContextFields.LABEL]: 'Tensorflow',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.HIDE]: true,
    [ContextFields.PARENT]: 'DL_FRAMEWORKS',
  },
  {
    id: 'B159_S1_2',
    [ContextFields.LABEL]: 'MXNet',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'DL_FRAMEWORKS',
  },
  {
    id: 'B159_S1_3',
    [ContextFields.LABEL]: 'Pytorch',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'DL_FRAMEWORKS',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'B159_S1_4',
    [ContextFields.LABEL]: 'CNTK',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'DL_FRAMEWORKS',
  },
  {
    id: 'B159_S2_1',
    [ContextFields.LABEL]: 'Root-cause and bugfixing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'B159_S2_2',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'B159_S2_3',
    [ContextFields.LABEL]: 'Debugging',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'B159_S2_4',
    [ContextFields.LABEL]: 'Fault localization',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'B159_S3_1',
    [ContextFields.LABEL]: 'Speech and image recognition',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B159_S3_2',
    [ContextFields.LABEL]: 'Natural language processing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B159_S3_3',
    [ContextFields.LABEL]: 'Gaming with reinforcement learning',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B159_S4_1',
    [ContextFields.LABEL]: 'Microsoft Azure Machine Learning',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_PLATFORMS',
  },
  {
    id: 'B159_S4_2',
    [ContextFields.LABEL]: 'Amazon SageMaker',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_PLATFORMS',
  },
  {
    id: 'B159_S4_3',
    [ContextFields.LABEL]: 'Google Cloud AI',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_PLATFORMS',
  },
  {
    id: 'B159_S4_4',
    [ContextFields.LABEL]: 'Philly',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'DL_PLATFORMS',
  },
  {
    id: 'B159_S4_5',
    [ContextFields.LABEL]: 'other DL platforms',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
  {
    id: 'B159_S5',
    [ContextFields.LABEL]: 'Program Failures',
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.SUB]: ['B159_S5_1', 'B159_S5_2', 'B159_S5_3', 'B159_S5_4', 'B159_S5_5', 'B159_S5_6', 'B159_S5_7'],
  },
  {
    id: 'B159_S5_1',
    [ContextFields.LABEL]: 'Code/Script Defects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B159_S5',
  },
  {
    id: 'B159_S5_2',
    [ContextFields.LABEL]: 'Hardware Failures',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B159_S5',
  },
  {
    id: 'B159_S5_3',
    [ContextFields.LABEL]: 'System Failures',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B159_S5',
  },
  {
    id: 'B159_S5_4',
    [ContextFields.LABEL]: 'ML/DL Bugs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B159_S5',
  },
  {
    id: 'B159_S5_5',
    [ContextFields.LABEL]: 'non-deterministic bugs in SQL-like MapReduce programs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B159_S5',
  },
  {
    id: 'B159_S5_6',
    [ContextFields.LABEL]: 'code/data defects in distributed data-parallel programs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B159_S5',
  },
  {
    id: 'B159_S5_7',
    [ContextFields.LABEL]: 'users errors',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B159_S5',
  },
];

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
