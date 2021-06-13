import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B086: MergedContextData[] = [
  {
    id: 'B086_0',
    [ContextFields.LABEL]: 'Data Science',
    [ContextFields.PARENT]: 'DATA',
    [ContextFields.SUB]: ['B086_S1'],
  },
  {
    id: 'B086_S1',
    [ContextFields.LABEL]: 'Data Processing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B086_0',
    [ContextFields.SUB]: ['B086_S1_1', 'B086_S1_2', 'B086_S1_3', 'B086_S1_4', 'B086_S1_5'],
  },
  {
    id: 'B086_S1_1',
    [ContextFields.LABEL]: 'Preprocessing Data Input',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B086_S1',
  },
  {
    id: 'B086_S1_2',
    [ContextFields.LABEL]: 'Training Models',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B086_S1',
  },
  {
    id: 'B086_S1_3',
    [ContextFields.LABEL]: 'Tuning Aguments or Parameters',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B086_S1',
  },
  {
    id: 'B086_S1_4',
    [ContextFields.LABEL]: 'Adding Analysis Functions',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B086_S1',
  },
  {
    id: 'B086_S1_5',
    [ContextFields.LABEL]: 'Propagating Changes',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B086_S1',
  },
  {
    id: 'B086_2',
    [ContextFields.LABEL]: 'Debugging Data Analysis Scripts',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.PARENT]: 'DEBUGGING',
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'B086_S3_1',
    [ContextFields.LABEL]: 'Python',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DISCUSSION,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'B086_S3_2',
    [ContextFields.LABEL]: 'Adaptation to other Languages',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DISCUSSION,
  },
  {
    id: 'B086_S3_3',
    [ContextFields.LABEL]: 'Language-agnostic',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DISCUSSION,
  },
];

export const B086 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b086',
    [GeneralPaperFields.TITLE]: 'Improving Data Scientist Efficiency with Provenance',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Jingmei Hu', 'Jiwon Joung', 'Maia Jacobs', 'Krzysztof Z. Gajos', 'Margo I. Seltzer'],
    [GeneralPaperFields.UNIVERSITIES]: ['Harvard University', 'University of Michigan', 'University of British Columbia'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'tool',
    [CharacterizationFields.EVALUATION]: 'quantitative evaluation',
    [CharacterizationFields.CONTEXTUAL_INQUIRY]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B086 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel use of language-level provenance',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
