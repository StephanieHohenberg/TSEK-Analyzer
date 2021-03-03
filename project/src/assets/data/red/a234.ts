import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A234: MergedContextData[] = [
  {
    id: 'A234_S1',
    [ContextFields.LABEL]: 'Rust Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.SUB]: ['A234_S1_1', 'A234_S1_2', 'A234_S1_3'],
  },
  {
    id: 'A234_S1_1',
    [ContextFields.LABEL]: 'UnSafe Rust Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'A234_S1',
  },
  {
    id: 'A234_S1_2',
    [ContextFields.LABEL]: 'single-threaded',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'A234_S1',
  },
  {
    id: 'A234_S1_3',
    [ContextFields.LABEL]: 'multi-threaded',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'A234_S1',
  },
  {
    id: 'A234_1',
    [ContextFields.LABEL]: 'security',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'A234_2',
    [ContextFields.LABEL]: 'C/C++ programs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A234_3',
    [ContextFields.LABEL]: 'security assurance',
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
  },
  {
    id: 'A234_4',
    [ContextFields.LABEL]: 'Rust',
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A234_5',
    [ContextFields.LABEL]: 'Open Source',
    [ContextFields.DIMENSION]: Dimension.SOURCING,
  },

];

export const A234: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a234',
    [GeneralPaperFields.TITLE]: 'Securing UnSafe Rust Programs with XRust',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Peiming Liu', 'Gang Zhao', 'Jeff Huang',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Texas A&M university' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared with an other approach',
    [CharacterizationFields.APPLICATION_TARGET]: 'programs',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A234 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new technique',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
