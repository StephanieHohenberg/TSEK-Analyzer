import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A258: MergedContextData[] = [
  {
    id: 'A258_S2',
    [ContextFields.LABEL]: 'Security Attacks',
    [ContextFields.PARENT]: 'SECURITY_A',
    [ContextFields.SUB]: ['A258_S2_1', 'A258_S2_2', 'A258_S2_3'],
  },
  {
    id: 'A258_S2_1',
    [ContextFields.LABEL]: 'Control-Flow Hijacking Attacks',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A258_S2',
  },
  {
    id: 'A258_S2_2',
    [ContextFields.LABEL]: 'Code-Injection Attacks',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A258_S2',
  },
  {
    id: 'A258_S2_3',
    [ContextFields.LABEL]: 'Code Reuse Attacks',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A258_S2',
    [ContextFields.SUB]: ['A258_S2_3_1'],
  },
  {
    id: 'A258_S2_3_1',
    [ContextFields.LABEL]: 'Return-Orientated Programming (ROP)',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A258_S2_3',
  },
  {
    id: 'A258_S3_1',
    [ContextFields.LABEL]: 'single-threaded programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'C_PROGRAMS',
  },
  {
    id: 'A258_S3_2',
    [ContextFields.LABEL]: 'multi-threaded programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'C_PROGRAMS',
  },
];


export const A258: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a258',
    [GeneralPaperFields.TITLE]: 'Burn After Reading: A Shadow Stack with Microsecond-level Runtime Rerandomization for Protecting Return Addresses',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Changwei Zou', 'Jingling Xue'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'UNSW Sydney' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'mechanism',
    [CharacterizationFields.BENCHMARK]: 'C/C++',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A258]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first shadow stack mechanism',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.IC1
    ],
  }
};

