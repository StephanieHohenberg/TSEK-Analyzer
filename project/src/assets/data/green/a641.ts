import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A641: MergedContextData[] = [
  {
    id: 'A641_1',
    [ContextFields.LABEL]: 'feature request detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A641_17',
  },
  {
    id: 'A641_2',
    [ContextFields.LABEL]: 'requirement engineering',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'A641_3',
    [ContextFields.LABEL]: 'developer communication',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A641_4',
    [ContextFields.LABEL]: 'sentence-wise feature request detection',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A641_5',
    [ContextFields.LABEL]: 'sentence-wise classifier',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION, // Vorkommen.CONCLUSION
  },
  {
    id: 'A641_6',
    [ContextFields.LABEL]: 'dialog-wise classifier',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A641_7',
    [ContextFields.LABEL]: '(traditional) text classification approach',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION, // Vorkommen.CONCLUSION
  },
  {
    id: 'A641_8',
    [ContextFields.LABEL]: 'model based approach',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A641_9',
    [ContextFields.LABEL]: 'open source projects',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
  {
    id: 'A641_10',
    [ContextFields.LABEL]: 'closed source projects',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
  {
    id: 'A641_11',
    [ContextFields.LABEL]: 'issue tracking system',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
  },
  {
    id: 'A641_12',
    [ContextFields.LABEL]: 'Projekte mit Online Chatting',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A641_13',
    [ContextFields.LABEL]: 'englisch-sprachige Projekte',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
  },
  {
    id: 'A641_14',
    [ContextFields.LABEL]: 'cross-project settings',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
  },
  // SUBTREES:
  {
    id: 'A641_S1',
    [ContextFields.LABEL]: 'applications of sentence classificifaction',
    [ContextFields.SUB]: ['A641_1', 'A641_15', 'A641_16', 'A641_17', 'A641_18', 'A641_19', 'A641_20'],
  },
  {
    id: 'A641_15',
    [ContextFields.LABEL]: 'opinion asking',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A641_S1',
  },
  {
    id: 'A641_16',
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
    [GeneralizationFields.VAGUE_STATEMENT]: true,
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
