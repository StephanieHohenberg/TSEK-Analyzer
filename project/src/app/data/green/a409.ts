import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

// TODO: write dass Kontexte nicht integrierbar sind in Gesamt Taxonomie
export const CONTEXT_A409: MergedContextData[] = [
  {
    id: 'A409_S1',
    [ContextFields.LABEL]: 'Human Values',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'HUMAN_ASPECTS',
    [ContextFields.SUB]: ['A409_S1_1', 'A409_S1_2', 'A409_S1_3', 'A409_S1_4',
                          'A409_S1_5', 'A409_S1_6', 'A409_S1_7', 'A409_S1_8'],
  },
  {
    id: 'A409_S1_1',
    [ContextFields.LABEL]: 'Equality',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_2',
    [ContextFields.LABEL]: 'Fairness',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_3',
    [ContextFields.LABEL]: 'Privacy',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_4',
    [ContextFields.LABEL]: 'Security',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_5',
    [ContextFields.LABEL]: 'Accessibility',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_6',
    [ContextFields.LABEL]: 'Integrity',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_7',
    [ContextFields.LABEL]: 'Compassion',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S1_8',
    [ContextFields.LABEL]: 'Social Justice',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A409_S1',
  },
  {
    id: 'A409_S2',
    [ContextFields.LABEL]: 'Research Fields / Disciplines',
    [ContextFields.SUB]: ['A409_S2_1', 'A409_S2_2', 'A409_S2_3', 'A409_S2_4'],
  },
  {
    id: 'A409_S2_1',
    [ContextFields.LABEL]: 'Software Engineering',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A409_S2',
    [ContextFields.SUB]: ['A409_S2_1_1', 'A409_S2_1_2'],
  },
  {
    id: 'A409_S2_1_1',
    [ContextFields.LABEL]: 'Values-first Software Engineering',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A409_S2_1',
  },
  {
    id: 'A409_S2_1_2',
    [ContextFields.LABEL]: 'Values-sensitive Software Development',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A409_S2_1',
  },
  {
    id: 'A409_S2_2',
    [ContextFields.LABEL]: 'Requirements Engineering',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A409_S2',
    [ContextFields.SUB]: ['A409_S2_2_1'],
  },
  {
    id: 'A409_S2_2_1',
    [ContextFields.LABEL]: 'Values-based Requirements Engineering',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A409_S2_2',
  },
  {
    id: 'A409_S2_3',
    [ContextFields.LABEL]: 'HCI',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A409_S2',
  },
  {
    id: 'A409_S2_4',
    [ContextFields.LABEL]: 'AI',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A409_S2',
  },
  {
    id: 'A409_S3',
    [ContextFields.LABEL]: 'Conferences & Journals',
    [ContextFields.SUB]: ['A409_S3_1', 'A409_S3_2', 'A409_S3_3', 'A409_S3_4'],
  },
  {
    id: 'A409_S3_1',
    [ContextFields.LABEL]: 'ICSE',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A409_S3',
  },
  {
    id: 'A409_S3_2',
    [ContextFields.LABEL]: 'ESEC/FSE',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A409_S3',
  },
  {
    id: 'A409_S3_3',
    [ContextFields.LABEL]: 'TSE',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A409_S3',
  },
  {
    id: 'A409_S3_4',
    [ContextFields.LABEL]: 'TOSEM',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A409_S3',
  },
];


export const A409: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a409',
    [GeneralPaperFields.TITLE]: 'A Study on the Prevalence of Human Values in Software Engineering Publications, 2015 – 2018',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Harsha Perera', 'Waqar Hussain', 'Jon Whittle',
      'Arif Nurwidyantoro', 'Davoud Mougouei', 'Rifat Ara Shams',
      'Gillian Oliver',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Monash University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'investigation of SE conferences, journals, manual classification',
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A409]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'using 1350 papers published',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: 'selected papers, conference venues',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_2,
        AssumptionGroup.IC2,
      ],
  }
};

