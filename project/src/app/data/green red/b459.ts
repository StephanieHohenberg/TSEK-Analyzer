import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B459: MergedContextData[] = [
  {
    id: 'B459_S1_1',
    [ContextFields.LABEL]: 'Test Case Generation',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.SUB]: ['B459_S1_1_1'],
  },
  {
    id: 'B459_S1_1_1',
    [ContextFields.LABEL]: 'Fuzzing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B459_S1_1',
  },
  {
    id: 'B459_S1_2',
    [ContextFields.LABEL]: 'Differential Testing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B459_S1_3',
    [ContextFields.LABEL]: 'Formal Verification',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B459_S1_4',
    [ContextFields.LABEL]: 'Validation and Proof Checking',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'B459_S2',
    [ContextFields.LABEL]: 'String Solvers',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.SUB]: ['B459_S2_1', 'B459_S2_2'],
  },
  {
    id: 'B459_S2_1',
    [ContextFields.LABEL]: 'SMT Solvers',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B459_S2',
    [ContextFields.SUB]: ['B459_S3'],
  },
  {
    id: 'B459_S2_2',
    [ContextFields.LABEL]: 'Automa-based Solvers',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'B459_S2',
  },
  {
    id: 'B459_S3',
    [ContextFields.LABEL]: 'Applications of SMT Solvers',
    [ContextFields.PARENT]: 'B459_S2_1',
    [ContextFields.SUB]: ['B459_S3_1', 'B459_S3_2', 'B459_S3_3', 'B459_S3_4', 'B459_S3_5'],
  },
  {
    id: 'B459_S3_1',
    [ContextFields.LABEL]: 'Program Verification',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B459_S3',
  },
  {
    id: 'B459_S3_2',
    [ContextFields.LABEL]: 'Program Synthesis',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B459_S3',
  },
  {
    id: 'B459_S3_3',
    [ContextFields.LABEL]: 'Test Case Generation',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B459_S3',
  },
  {
    id: 'B459_S3_4',
    [ContextFields.LABEL]: 'Symbolic Execution',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B459_S3',
  },
  {
    id: 'B459_S3_5',
    [ContextFields.LABEL]: 'Concolic Testing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B459_S3',
  },
];

export const B459 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b459',
    [GeneralPaperFields.TITLE]: 'Automatically Testing String Solvers',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Alexandra Bugariu', 'Peter Müller'],
    [GeneralPaperFields.UNIVERSITIES]: ['ETH Zurich'],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B459 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel technique',
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
    [GeneralizationFields.REFERENCE_IMPLEMENTATION]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
