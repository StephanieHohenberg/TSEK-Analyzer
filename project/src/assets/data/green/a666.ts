import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A666: MergedContextData[] = [
  {
    id: 'A666_S1',
    [ContextFields.LABEL]: 'Software Development',
    [ContextFields.SUB]: ['A666_S1_1', 'A666_S1_2', 'A666_S1_3'],
  },
  {
    id: 'A666_S1_1',
    [ContextFields.LABEL]: 'Colloborative',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S1',
  },
  {
    id: 'A666_S1_2',
    [ContextFields.LABEL]: 'Solo',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A666_S1',
  },
  {
    id: 'A666_S1_3',
    [ContextFields.LABEL]: 'Live',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A666_S1',
  },
  {
    id: 'A666_2',
    [ContextFields.LABEL]: 'Emotion Awareness',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'A666_S3',
    [ContextFields.LABEL]: 'Study Setting',
    [ContextFields.SUB]: ['A666_S3_1', 'A666_S3_2'],
  },
  {
    id: 'A666_S3_1',
    [ContextFields.LABEL]: 'Labotory Settings',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A666_S3',
  },
  {
    id: 'A666_S3_2',
    [ContextFields.LABEL]: 'Workplace Settings in Software Development Companies',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'A666_S3',
  },
  {
    id: 'A666_S4',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
  },
];


export const A666: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a666',
    [GeneralPaperFields.TITLE]: 'Recognizing Developers’ Emotions while Programming',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Daniela Girardi', 'Nicole Novielli',
      'Davide Fucci', 'Filippo Lanubile',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Bari', 'Blekinge Institue of Technology' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.EXPLORATORY_STUDY]: true,
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: 'methods',
    [CharacterizationFields.EXPERIMENT]: 'self-assesment / self-report / (wristband) non-invasive biometric sensors for emotion recognition',
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.STRUCTURED_INTERVIEW]: true,
    [CharacterizationFields.DL_NN]: 'ML classifier',
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A666]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_1,
        AssumptionGroup.AC2_2,
        AssumptionGroup.IC4,
      ],
  }
};

