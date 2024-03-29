import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A765: MergedContextData[] = [
  {
    id: 'A765_S1_1',
    [ContextFields.LABEL]: 'Fuzzing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'FUZZING',
  },
  {
    id: 'A765_S1_2',
    [ContextFields.LABEL]: 'Coverage-based Gey-box Fuzzing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A765_S1_1',
  },
  {
    id: 'A765_S1_3',
    [ContextFields.LABEL]: 'Static Analysis',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A765_S1_4',
    [ContextFields.LABEL]: 'Dynamic Analysis',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A765_S2',
    [ContextFields.LABEL]: 'Memory Bugs',
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.SUB]: ['A765_S2_1', 'A765_S2_2', 'B261_S1'],
  },
  {
    id: 'A765_S2_1',
    [ContextFields.LABEL]: 'Memory Consumption Bugs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A765_S2',
  },
  {
    id: 'A765_S2_2',
    [ContextFields.LABEL]: 'Memory Corruption Vulnerabilities',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A765_S2',
  },
];

export const A765 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a765',
    [GeneralPaperFields.TITLE]: 'MemLock: Memory Usage Guided Fuzzing',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Cheng Wen', 'Haijun Wang', 'Yuekang Li', 'Shengchao Qin', 'Yang Liu', 'Zhiwu Xu', 'Hongxu Chen, Xiaofei Xie', 'Geguang Pu', 'Ting Liu'],
    [GeneralPaperFields.UNIVERSITIES]: ['Shenzhen University', 'Nanyang Technological University', 'Teesside University', 'East China Normal University', 'Xian Jiaotong University'],
    [GeneralPaperFields.CONTINENTS]: [Continent.ASIA, Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A765 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: 'Passage in Discussion',
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
