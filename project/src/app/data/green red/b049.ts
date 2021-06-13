import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B049: MergedContextData[] = [
  {
    id: 'B049_1',
    [ContextFields.LABEL]: 'Static Call Graph Construction',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'B049_S1',
    [ContextFields.LABEL]: 'detecting faults (bugs, vulnerabilities, defects)',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'BUG_DETECTION',
    [ContextFields.SUB]: ['B049_S1_S2', 'B049_S1_2'],
  },
  {
    id: 'B049_S1_S2',
    [ContextFields.LABEL]: 'static analysis',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B049_S1',
    [ContextFields.SUB]: ['B049_S1_S2_1', 'B049_S1_S2_2', 'B049_S1_S2_3'],
  },
  {
    id: 'B049_S1_2',
    [ContextFields.LABEL]: 'dynamic analysis',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B049_S1',
  },
  {
    id: 'B049_S1_S2_1',
    [ContextFields.LABEL]: 'context-insensitive',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B049_S1_S2',
  },
  {
    id: 'B049_S1_S2_2',
    [ContextFields.LABEL]: 'context-insensitive with reflection support',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B049_S1_S2',
  },
  {
    id: 'B049_S1_S2_3',
    [ContextFields.LABEL]: 'context-sensitive',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B049_S1_S2',
  },
  {
    id: 'B049_2',
    [ContextFields.LABEL]: 'Java Programs',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.HIDE]: true,
    [ContextFields.PARENT]: 'PROGRAMS',
  },
];

export const B049 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b049',
    [GeneralPaperFields.TITLE]: 'On the Recall of Static Call Graph Construction in Practice',
    [GeneralPaperFields.AWARDS]: [ Award.GREEN, Award.RED ],
    [GeneralPaperFields.AUTHORS]: [
      'Li Sui', 'Jens Dietrich', 'Amjed Tahir', 'George Fourtounis'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Massey University', 'Victoria University of Wellington', 'University of Athens',
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA, Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'manual analysis of real-world programs',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'comparison of two models (static & dynamic)',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B049 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'internal validity',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
