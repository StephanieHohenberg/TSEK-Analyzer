import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A986: MergedContextData[] = [
  {
    id: 'A986_S1',
    [ContextFields.LABEL]: 'Debugging',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['A986_S1_1', 'A986_S1_2'],
  },
  {
    id: 'A986_S1_1',
    [ContextFields.LABEL]: 'Debugging Reccurent Neural Networks',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A986_S1',
  },
  {
    id: 'A986_S1_2',
    [ContextFields.LABEL]: 'Software Debugging',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A986_S1',
    [ContextFields.SUB]: ['A986_S1_2_1', 'A986_S1_2_1'],
  },
  {
    id: 'A986_S1_2_1',
    [ContextFields.LABEL]: 'Trace Analysis',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A986_S1',
  },
  {
    id: 'A986_S1_2_2',
    [ContextFields.LABEL]: 'Differential Analysis',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A986_S1',
  },
  {
    id: 'A986_S2_0',
    [ContextFields.LABEL]: 'Intelligent Computing Systems', // TODO Related to High Computing?
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.SUB]: ['A986_S2'],
  },
  {
    id: 'A986_S2',
    [ContextFields.LABEL]: 'Neural Networks',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S2_0',
    [ContextFields.SUB]: ['A986_S2_1', 'A986_S2_2', 'A986_S2_3'],
  },
  {
    id: 'A986_S2_1',
    [ContextFields.LABEL]: 'Reccurent Neural Networks',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A986_S2',
  },
  {
    id: 'A986_S2_2',
    [ContextFields.LABEL]: 'Deep Neural Networks',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S2',
  },
  {
    id: 'A986_S2_3',
    [ContextFields.LABEL]: 'Covulutional Neural Networks',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S2',
  },
  {
    id: 'A986_S2_4',
    [ContextFields.LABEL]: 'Feed-Fordward Neural Networks',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A986_S2',
  },
  {
    id: 'A986_S3',
    [ContextFields.LABEL]: 'DL applications',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.SUB]: ['A986_S3_1', 'A986_S3_2', 'A986_S3_3', 'A986_S3_4', 'A986_S3_5', 'A986_S3_6'],
  },
  {
    id: 'A986_S3_1',
    [ContextFields.LABEL]: 'Self-Driving Car Systems',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S3',
  },
  {
    id: 'A986_S3_2',
    [ContextFields.LABEL]: 'Recognizing Objects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S3',
  },
  {
    id: 'A986_S3_3',
    [ContextFields.LABEL]: 'Online Advertisement',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S3',
  },
  {
    id: 'A986_S3_4',
    [ContextFields.LABEL]: 'Mobile/Wearable Devices',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S3',
  },
  {
    id: 'A986_S3_5',
    [ContextFields.LABEL]: 'User Authentication',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S3',
  },
  {
    id: 'A986_S3_6',
    [ContextFields.LABEL]: 'Detecting/Monitoring Users Behaviors',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S3',
  },
  {
    id: 'A986_S4',
    [ContextFields.LABEL]: 'RNN applications',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.SUB]: ['A986_S4_1', 'A986_S4_2', 'A986_S4_3', 'A986_S4_4', 'A986_S4_5'],
  },
  {
    id: 'A986_S4_1',
    [ContextFields.LABEL]: 'processing textual software artifact (commits, code comments, app reviews)',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S4',
  },
  {
    id: 'A986_S4_2',
    [ContextFields.LABEL]: 'bug detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S4',
  },
  {
    id: 'A986_S4_3',
    [ContextFields.LABEL]: 'software maintenance',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S4',
  },
  {
    id: 'A986_S4_4',
    [ContextFields.LABEL]: 'test generation',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S4',
  },
  {
    id: 'A986_S4_5',
    [ContextFields.LABEL]: 'adversarial sample detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A986_S4',
  },
];

export const A986 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a986',
    [GeneralPaperFields.TITLE]: 'TRADER: Trace Divergence Analysis and Embedding Regulation for Debugging Recurrent Neural Networks',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Guanhong Tao', 'Shiqing Ma', 'Yingqi Liu', 'Qiuling Xu', 'Xiangyu Zhang'],
    [GeneralPaperFields.UNIVERSITIES]: ['Purdue University', 'Rutgers University'],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.DL_NN]: 'Recurrent  Neural Networks',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A986 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel technique',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
