import {
  AnalysisPaperData,
  AnalysisPaperFields,
  Award,
  Continent,
  GeneralPaperFields
} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B483: MergedContextData[] = [
  {
    id: 'B483_S1_1',
    [ContextFields.LABEL]: 'file system testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S1_2',
    [ContextFields.LABEL]: 'crash consistency testing',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S1_3',
    [ContextFields.LABEL]: 'concurrency testing',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S1_4',
    [ContextFields.LABEL]: 'model-based testing',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.SUB]: ['B483_S1_4_1', 'B483_S1_4_2', 'B483_S1_4_3', 'B483_S1_4_4', 'B483_S1_4_5', 'B483_S1_4_6'],
  },
  {
    id: 'B483_S1_4_1',
    [ContextFields.LABEL]: 'layered model-based testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B483_S1_4',
  },
  {
    id: 'B483_S1_4_2',
    [ContextFields.LABEL]: 'layered model-based testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B483_S1_4',
  },
  {
    id: 'B483_S1_4_3',
    [ContextFields.LABEL]: 'UML',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B483_S1_4',
  },
  {
    id: 'B483_S1_4_4',
    [ContextFields.LABEL]: 'finite state automata',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B483_S1_4',
  },
  {
    id: 'B483_S1_4_5',
    [ContextFields.LABEL]: 'event sequence graph',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B483_S1_4',
  },
  {
    id: 'B483_S1_4_6',
    [ContextFields.LABEL]: 'markov chain',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B483_S1_4',
  },
  {
    id: 'B483_S1_5',
    [ContextFields.LABEL]: 'test input generation',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S1_6',
    [ContextFields.LABEL]: 'regression testing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S1_7',
    [ContextFields.LABEL]: 'fuzzing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.SUB]: ['B483_S1_7_1'],
  },
  {
    id: 'B483_S1_7_1',
    [ContextFields.LABEL]: 'grammar-based fuzzing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B483_S1_7',
  },
  {
    id: 'B483_S1_8',
    [ContextFields.LABEL]: 'model checking',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S1_9',
    [ContextFields.LABEL]: 'formal verification',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B483_S2',
    [ContextFields.LABEL]: 'File System Implementations',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B483_S2_1'],
    [ContextFields.PARENT]: 'APPLICATIONS',
  },
  {
    id: 'B483_S2_1',
    [ContextFields.LABEL]: 'UNIX file systems',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B483_S2',
  },
  {
    id: 'B483_3',
    [ContextFields.LABEL]: 'Linux Kernel',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'B483_S4',
    [ContextFields.LABEL]: 'consequences of file system bugs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.SUB]: ['B483_S4_1', 'B483_S4_2', 'B483_S4_3'],
  },
  {
    id: 'B483_S4_1',
    [ContextFields.LABEL]: 'kernel panic',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B483_S4',
  },
  {
    id: 'B483_S4_2',
    [ContextFields.LABEL]: 'data loss',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B483_S4',
  },
  {
    id: 'B483_S4_3',
    [ContextFields.LABEL]: 'security vulnerabilities',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B483_S4',
  },
];


export const B483: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b483',
    [GeneralPaperFields.TITLE]: 'Testing File System Implementations on Layered Models',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Dongjie Chen', 'Yanyan Jiang', 'Chang Xu',
      'Xiaoxing Ma', 'Jian Lu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Nanjing University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B483]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C4,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_1,
      ],
  }
};

