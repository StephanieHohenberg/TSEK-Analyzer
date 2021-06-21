import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A234: MergedContextData[] = [
  {
    id: 'A234_S1',
    [ContextFields.LABEL]: 'Rust Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'PROGRAMS',
    [ContextFields.SUB]: ['A234_S1_1', 'A234_S1_2', 'A234_S1_3'],
  },
  {
    id: 'A234_S1_1',
    [ContextFields.LABEL]: 'UnSafe Rust Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A234_S1',
  },
  {
    id: 'A234_S1_2',
    [ContextFields.LABEL]: 'single-threaded',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A234_S1',
  },
  {
    id: 'A234_S1_3',
    [ContextFields.LABEL]: 'multi-threaded',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A234_S1',
  },
  {
    id: 'A234_1',
    [ContextFields.LABEL]: 'Security Assurance',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SECURITY_A',
  },
  {
    id: 'A234_2',
    [ContextFields.LABEL]: 'C/C++ Programs',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'C_PROGRAMS',
  },
  {
    id: 'A234_4',
    [ContextFields.LABEL]: 'Rust',
    [ContextFields.PARENT]: 'RUST',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A234_5',
    [ContextFields.LABEL]: 'Open Source',
    [ContextFields.PARENT]: 'PS_SOURCING',
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
