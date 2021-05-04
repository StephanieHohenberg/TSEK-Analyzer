import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';

export const CONTEXT_A654: MergedContextData[] = [
  {
    id: 'A654_1',
    [ContextFields.LABEL]: 'cognitive biases',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A654_S2',
    [ContextFields.LABEL]: 'SE fields with cognitive biases',
    [ContextFields.SUB]: ['A654_S2_1', 'A654_S2_2', 'A654_S2_3', 'A654_S2_4', 'A654_S2_5', 'A654_S2_6']
  },
  {
    id: 'A654_S2_1',
    [ContextFields.LABEL]: 'Software Development',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A654_S2',
    [ContextFields.SUB]: ['A654_S2_1_1']
  },
  {
    id: 'A654_S2_1_1',
    [ContextFields.LABEL]: 'Solo Programming',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'A654_S2_1',
  },
  {
    id: 'A654_S2_2',
    [ContextFields.LABEL]: 'Defect Density',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A654_S2',
  },
  {
    id: 'A654_S2_3',
    [ContextFields.LABEL]: 'Defect Proneness',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A654_S2',
  },
  {
    id: 'A654_S2_4',
    [ContextFields.LABEL]: 'Requirements Specification',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A654_S2',
  },
  {
    id: 'A654_S2_5',
    [ContextFields.LABEL]: 'Originality of Design',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A654_S2',
  },
  {
    id: 'A654_S2_6',
    [ContextFields.LABEL]: 'Feature Design',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A654_S2',
  },
  {
    id: 'A654_S3',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.IDENTICAL]: ['A691_S1', 'B073_S1'],
    [ContextFields.SUB]: ['A654_S3_1', 'A654_S3_2', 'A654_S3_3', 'A654_S3_4', 'A654_S3_5', 'A654_S3_6', 'A654_S3_7', 'A654_S3_8']
  },
  {
    id: 'A654_S3_1',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_2',
    [ContextFields.LABEL]: 'Clojure',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_3',
    [ContextFields.LABEL]: 'Python',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_4',
    [ContextFields.LABEL]: 'Haskell',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_5',
    [ContextFields.LABEL]: 'TypeScript',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_6',
    [ContextFields.LABEL]: 'C/C++',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_7',
    [ContextFields.LABEL]: 'CSS',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S3_8',
    [ContextFields.LABEL]: 'Prolog',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S3',
  },
  {
    id: 'A654_S4',
    [ContextFields.LABEL]: 'Project Characteristics',
    [ContextFields.IDENTICAL]: ['B535_S4'],
    [ContextFields.SUB]: ['A654_S4_1']
  },
  {
    id: 'A654_S4_1',
    [ContextFields.LABEL]: 'large team size',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A654_S4',
  },
];

export const A654: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a654',
    [GeneralPaperFields.TITLE]: 'A Tale from the Trenches: Cognitive Biases and Software Development',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Souti Chattopadhyay', 'Nicholas Nelson', 'Audrey Au',
      'Natalia Morales', 'Christopher Sanchez', 'Rahul Pandita', 'Anita Sarma',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Oregon State University, Corvallis', 'Phase Change Software'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.FIELD_STUDY]: true,
    [CharacterizationFields.CONTROLLED_EXPERIMENT]: true,
    [CharacterizationFields.INTERVIEW]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A654]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.NO_FOCUS]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C2_1 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
