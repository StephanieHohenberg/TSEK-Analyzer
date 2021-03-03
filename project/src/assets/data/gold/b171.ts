import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B171: MergedContextData[] = [
  {
    id: 'B171_S1',
    [ContextFields.LABEL]: 'Code Review',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B171_9', 'B171_10', 'B171_11', 'B171_12'],
  },
  {
    id: 'B171_2',
    [ContextFields.LABEL]: 'Availability Bias',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'B171_3',
    [ContextFields.LABEL]: 'developer',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'B171_4',
    [ContextFields.LABEL]: 'at least 3 years of professional development experience',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'B171_5',
    [ContextFields.LABEL]: 'closed-source software projects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
  },
  {
    id: 'B171_6',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
  },
  {
    id: 'B171_7',
    [ContextFields.LABEL]: 'projects using software review tools with online discussion features',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'B171_8',
    [ContextFields.LABEL]: 'bigger projects with a big dev team',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  // SUBTREE 1
  {
    id: 'B171_9',
    [ContextFields.LABEL]: 'Peer Review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_10',
    [ContextFields.LABEL]: 'Peer Panel Review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_11',
    [ContextFields.LABEL]: 'colloborative code review',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B171_S1',
  },
  {
    id: 'B171_12',
    [ContextFields.LABEL]: 'seperate individual code review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B171_S1',
  },
  // SUBTREE 2
  {
    id: 'B171_S2',
    [ContextFields.LABEL]: 'SE fields with cognitive biases',
    [ContextFields.SUB]: ['B171_S1', 'B171_13', 'B171_14', 'B171_15', 'B171_16', 'B171_17'],
  },
  {
    id: 'B171_13',
    [ContextFields.LABEL]: 'Requirements elicitation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S2',
  },
  {
    id: 'B171_14',
    [ContextFields.LABEL]: 'Pair programming',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S2',
  },
  {
    id: 'B171_15',
    [ContextFields.LABEL]: 'software reuse',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S2',
  },
  {
    id: 'B171_16',
    [ContextFields.LABEL]: 'software project management',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S2',
  },
  {
    id: 'B171_17',
    [ContextFields.LABEL]: 'effort estimation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B171_S2',
  },
  // SUBTREE 3
  {
    id: 'B171_S3',
    [ContextFields.LABEL]: 'types of software issues',
    [ContextFields.SUB]: ['B171_18', 'B171_19', 'B171_S4'],
  },
  {
    id: 'B171_18',
    [ContextFields.LABEL]: 'maintainbility issues',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S3',
  },
  {
    id: 'B171_19',
    [ContextFields.LABEL]: 'design issues',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S3',
  },
  {
    id: 'B171_S4',
    [ContextFields.LABEL]: 'correctness issues',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S3',
    [ContextFields.SUB]: ['B171_20', 'B171_21', 'B171_22'],
  },
  {
    id: 'B171_20',
    [ContextFields.LABEL]: 'Null Pointer',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S4',
  },
  {
    id: 'B171_21',
    [ContextFields.LABEL]: 'Wrong Value Return',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S4',
  },
  {
    id: 'B171_22',
    [ContextFields.LABEL]: 'Corner Case Bug',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B171_S4',
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
