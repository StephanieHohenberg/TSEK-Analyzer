import {
  AnalysisPaperData,
  AnalysisPaperFields,
  Award,
  Continent,
  GeneralPaperFields
} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A087: MergedContextData[] = [
  {
    id: 'A087_S1_1',
    [ContextFields.LABEL]: 'Root-Cause Analysis',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'BUG_HANDLING'
  },
  {
    id: 'A087_S1_2',
    [ContextFields.LABEL]: 'Delta Debugging',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'BUG_HANDLING'
  },
  {
    id: 'A087_S2_1',
    [ContextFields.LABEL]: 'Eclipse Plugin',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS'
  },
  {
    id: 'A087_S2_2',
    [ContextFields.LABEL]: 'Java Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PROGRAMS'
  },
  {
    id: 'A087_S2_3',
    [ContextFields.LABEL]: 'JUnit Interfaces',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS'
  },
  {
    id: 'A087_3',
    [ContextFields.LABEL]: 'TDD',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'TESTING'
  },
  {
    id: 'A087_S4',
    [ContextFields.LABEL]: 'Test Characteristics',
    [ContextFields.SUB]: ['A087_S4_1', 'A087_S4_2'],
    [ContextFields.PARENT]: 'TESTING'
  },
  {
    id: 'A087_S4_1',
    [ContextFields.LABEL]: 'single argument tests with string or primitive arguments',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A087_S4'
  },
  {
    id: 'A087_S4_2',
    [ContextFields.LABEL]: 'multiple argument tests',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A087_S4'
  },
  {
    id: 'A087_S5',
    [ContextFields.LABEL]: 'Code Ownership',
    [ContextFields.SUB]: ['A087_S5_1', 'A087_S5_2'],
    [ContextFields.PARENT]: 'DEBUGGING'
  },
  {
    id: 'A087_S5_1',
    [ContextFields.LABEL]: 'debugging other s code',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A087_S5'
  },
  {
    id: 'A087_S5_2',
    [ContextFields.LABEL]: 'debugging own/familiar code',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A087_S5'
  },
];


export const A087: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a087',
    [GeneralPaperFields.TITLE]: 'Causal Testing: Understanding Defects’ Root Causes',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.RED, Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Brittany Johnson', 'Yuriy Brun', 'Alexandra Meliou',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Massachusetts Amherst' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'prototype',
    [CharacterizationFields.BENCHMARK]: 'Defects4J',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.CONTROLLED_EXPERIMENT]: true,
    [CharacterizationFields.SURVEY]: 'questionnaire after the experiment',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A087]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new method',
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [IterationGroup.C1, IterationGroup.C4],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
