import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B171: MergedContextData[] = [
  {
    id: 'B171_S1',
    [ContextFields.LABEL]: 'Forms of Code Review',
    [ContextFields.PARENT]: 'CODE_REVIEW',
    [ContextFields.SUB]: ['B171_S1_1', 'B171_S1_2', 'B171_S1_3', 'B171_S1_4'],
  },
  {
    id: 'B171_S1_1',
    [ContextFields.LABEL]: 'Peer Review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_S1_2',
    [ContextFields.LABEL]: 'Peer Panel Review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_S1_3',
    [ContextFields.LABEL]: 'colloborative code review',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_S1_4',
    [ContextFields.LABEL]: 'seperate individual code review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_S2_0',
    [ContextFields.LABEL]: 'Code Review',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'COG_BIAS',
  },
  {
    id: 'B171_S2_1',
    [ContextFields.LABEL]: 'Requirements Elicitation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'COG_BIAS',
  },
  {
    id: 'B171_S2_2',
    [ContextFields.LABEL]: 'Pair Programming',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'COG_BIAS',
  },
  {
    id: 'B171_S2_3',
    [ContextFields.LABEL]: 'Software Reuse',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'COG_BIAS',
  },
  {
    id: 'B171_S2_4',
    [ContextFields.LABEL]: 'Software Project Management',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'COG_BIAS',
  },
  {
    id: 'B171_S2_5',
    [ContextFields.LABEL]: 'Effort Estimation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'COG_BIAS',
  },
  {
    id: 'B171_S3_1',
    [ContextFields.LABEL]: 'Maintainbility Issues',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'SOFTWARE_ISSUES',
  },
  {
    id: 'B171_S3_2',
    [ContextFields.LABEL]: 'Design Issues',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'SOFTWARE_ISSUES',
  },
  {
    id: 'B171_S3_3',
    [ContextFields.LABEL]: 'Correctness Issues',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'SOFTWARE_ISSUES',
    [ContextFields.SUB]: ['B171_S3_3_1', 'B171_S3_3_2', 'B171_S3_3_3'],
  },
  {
    id: 'B171_S3_3_1',
    [ContextFields.LABEL]: 'Null Pointer',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S3_3',
  },
  {
    id: 'B171_S3_3_2',
    [ContextFields.LABEL]: 'Wrong Value Return',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S3_3',
  },
  {
    id: 'B171_S3_3_3',
    [ContextFields.LABEL]: 'Corner Case Bug',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S3_3',
  },
  {
    id: 'B171_4',
    [ContextFields.LABEL]: 'Availability Bias',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.PARENT]: 'HUMAN_ASPECTS',
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'B171_S5_1',
    [ContextFields.LABEL]: 'developer',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_PERSON_CHARACTERISTICS',

  },
  {
    id: 'B171_S5_2',
    [ContextFields.LABEL]: 'at least 3 years of professional development experience',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_PERSON_CHARACTERISTICS',
  },
  {
    id: 'B171_S6_1',
    [ContextFields.LABEL]: 'closed-source software projects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B171_S6_2',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.HIDE]: true,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
  },
  {
    id: 'B171_S6_3',
    [ContextFields.LABEL]: 'projects using software review tools with online discussion features',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B171_S6_4',
    [ContextFields.LABEL]: 'bigger projects with a big dev team',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
];

export const B171: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b171',
    [GeneralPaperFields.TITLE]: 'Primers or Reminders? The Effects of Existing Review Comments on Code Review',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Davide Spadini', 'Gül Çalikli', 'Alberto Bacchelli'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Delft University of Technology', 'Chalmers & University of Gothenburg', 'University of Zurich'
    ],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.CONTROLLED_EXPERIMENT]: true,
    [CharacterizationFields.PSYCHOLOGICAL_EXPERIMENT]: true,
    [CharacterizationFields.ONLINE_EXPERIMENT]: true,
    [CharacterizationFields.SURVEY]: 'questionnaire after the experiment',
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B171]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [IterationGroup.C1],
    [AssumptionFields.ASSUMPTION_GROUPS]: [AssumptionGroup.AC2_2, AssumptionGroup.AC2_3],
  }
};
