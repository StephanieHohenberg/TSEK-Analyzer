import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A641: MergedContextData[] = [
  {
    id: 'A641_1',
    [ContextFields.LABEL]: 'feature request detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A641_S1',
  },
  {
    id: 'A641_2',
    [ContextFields.LABEL]: 'Requirement Engineering',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'A641_3',
    [ContextFields.LABEL]: 'Developer Communication',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'NATURAL_LANGUAGES',
  },
  {
    id: 'A641_S3',
    [ContextFields.LABEL]: 'Text Classification',
    [ContextFields.SUB]: ['A641_S3_1', 'A641_S3_2', 'A641_S3_3', 'A641_S3_4'],
    [ContextFields.PARENT]: 'NATURAL_LANGUAGES',
  },
  {
    id: 'A641_S3_1',
    [ContextFields.LABEL]: 'sentence-wise classifier',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION, // Vorkommen.CONCLUSION
    [ContextFields.PARENT]: 'A641_S3',
    [ContextFields.SUB]: ['A641_S1'],
  },
  {
    id: 'A641_S3_2',
    [ContextFields.LABEL]: 'dialog-wise classifier',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A641_S3',
  },
  {
    id: 'A641_S3_3',
    [ContextFields.LABEL]: '(traditional) text classification approach',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION, // Vorkommen.CONCLUSION
    [ContextFields.PARENT]: 'A641_S3',
  },
  {
    id: 'A641_S3_4',
    [ContextFields.LABEL]: 'model based approach',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A641_S3',
  },
  {
    id: 'A641_11',
    [ContextFields.LABEL]: 'Issue Tracking System',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'SYSTEMS',
  },
  {
    id: 'A641_S2_1',
    [ContextFields.LABEL]: 'Projekte mit Online Chatting',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_SPECIFIC',
  },
  {
    id: 'A641_S2_2',
    [ContextFields.LABEL]: 'english speaking projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'PS_CHAR',
  },
  {
    id: 'A641_S2_3',
    [ContextFields.LABEL]: 'cross-project settings',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'PS_SPECIFIC',
  },
  // SUBTREES:
  {
    id: 'A641_S1',
    [ContextFields.LABEL]: 'applications of sentence classificifaction',
    [ContextFields.PARENT]: 'A641_S3_1',
    [ContextFields.SUB]: ['A641_1', 'A641_15', 'A641_17', 'A641_18', 'A641_19', 'A641_20'],
  },
  {
    id: 'A641_15',
    [ContextFields.LABEL]: 'opinion asking',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A641_S1',
  },
  {
    id: 'A641_17',
    [ContextFields.LABEL]: 'problem discovery',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A641_S1',
  },
  {
    id: 'A641_18',
    [ContextFields.LABEL]: 'solution proposal',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A641_S1',
  },
  {
    id: 'A641_19',
    [ContextFields.LABEL]: 'information seeking',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A641_S1',
  },
  {
    id: 'A641_20',
    [ContextFields.LABEL]: 'information giving',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A641_S1',
  },
];


export const A641: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a641',
    [GeneralPaperFields.TITLE]: 'Detection of Hidden Feature Requests from Massive Chat Messages via Deep Siamese Network',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Lin Shi', 'Mingzhe Xing', 'Mingyang Li', 'Yawen Wang', 'Shoubin Li', 'Qing Wang',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Institute of Software Chinese Academy of Sciences', 'University of Chinese Academy of Sciences, Beijing' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'Deep Siamase Network, bilSTM',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A641]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
      IterationGroup.C2_1,
      IterationGroup.C3,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC1,
        AssumptionGroup.AC2_1,
      ],
  }
};

