import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A469: MergedContextData[] = [
  {
    id: 'A469_S1',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['A469_S1_1', 'A469_S1_2', 'A469_S1_3', 'A469_S1_4'],
  },
  {
    id: 'A469_S1_1',
    [ContextFields.LABEL]: 'Test Input Generation',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A469_S1',
    [ContextFields.SUB]: ['B447_S1_1_1', 'B447_S1_1_2', 'B447_S1_1_3'],
  },
  {
    id: 'A469_S1_1_1',
    [ContextFields.LABEL]: 'use cased based',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A469_S1_1',
  },
  {
    id: 'A469_S1_1_2',
    [ContextFields.LABEL]: 'random',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A469_S1_1',
  },
  {
    id: 'A469_S1_1_3',
    [ContextFields.LABEL]: 'heuristic',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A469_S1_1',
  },
  {
    id: 'A469_S1_2',
    [ContextFields.LABEL]: 'Manual Testing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A469_S1',
  },
  {
    id: 'A469_S1_3',
    [ContextFields.LABEL]: 'human-machine collaborative testing (mix of manual and automatic)',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.DISCUSSION,
    [ContextFields.PARENT]: 'A469_S1',
  },
  {
    id: 'A469_S1_4',
    [ContextFields.LABEL]: 'systematic input space exploration',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A469_S1',
  },
  {
    id: 'A469_2',
    [ContextFields.LABEL]: 'Android Apps',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
];


export const A469: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a469',
    [GeneralPaperFields.TITLE]: 'ComboDroid: Generating High-Quality Test Inputs for Android Apps via Use Case Combinations',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Jue Wang', 'Yanyan Jiang', 'Chang Xu',
      'Chun Cao', 'Xiaoxing Ma', 'Jian Lu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Nanjing University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'framework',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: 'metrics',
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A469]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'internal',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'case',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C4
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC4,
      ],
  }
};

