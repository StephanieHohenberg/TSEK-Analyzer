import {
  AnalysisPaperData,
  AnalysisPaperFields,
  Award,
  Continent,
  GeneralPaperFields
} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A186: MergedContextData[] = [
  {
    id: 'A186_1',
    [ContextFields.LABEL]: 'Automated Test Generation',
    [ContextFields.SUB]: ['A186_S1'],
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A186_S1',
    [ContextFields.LABEL]: 'Near Duplicate Detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['A186_S1_1'],
    [ContextFields.PARENT]: 'A186_1',
  },
  {
    id: 'A186_S1_1',
    [ContextFields.LABEL]: 'Web Testing',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A186_S1',
    [ContextFields.SUB]: ['A186_S1_1_1'],
  },
  {
    id: 'A186_S1_1_1',
    [ContextFields.LABEL]: 'e2e Testing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A186_S1_1',
  },
  {
    id: 'A186_S1_2',
    [ContextFields.LABEL]: 'Information Retrieval / Data Extraction',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A186_S1',
    [ContextFields.SUB]: ['A186_S1_2_1', 'A186_S1_2_1'],
  },
  {
    id: 'A186_S1_2_1',
    [ContextFields.LABEL]: 'Plagiarism',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A186_S1_2',
  },
  {
    id: 'A186_S1_2_2',
    [ContextFields.LABEL]: 'Spam Detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A186_S1_2',
  },
  {
    id: 'A186_S1_3',
    [ContextFields.LABEL]: 'Computer Vision',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A186_S1',
  },
  {
    id: 'A186_S2_1',
    [ContextFields.LABEL]: 'php based applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A186_S2_2',
    [ContextFields.LABEL]: 'web apps with JS frameworks',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
    [ContextFields.SUB]: ['A186_S2_2_1', 'A186_S2_2_2', 'A186_S2_2_3', 'A186_S2_2_4'],
  },
  {
    id: 'A186_S2_2_1',
    [ContextFields.LABEL]: 'Backbone.js',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A186_S2_2',
  },
  {
    id: 'A186_S2_2_2',
    [ContextFields.LABEL]: 'Vue.js',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A186_S2_2',
  },
  {
    id: 'A186_S2_2_3',
    [ContextFields.LABEL]: 'AngularJS',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A186_S2_2',
  },
  {
    id: 'A186_S2_2_4',
    [ContextFields.LABEL]: 'Phoenix/React',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A186_S2_2',
  },
  {
    id: 'A186_S3',
    [ContextFields.LABEL]: 'Test Automation Tools',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.SUB]: ['A186_S3_1', 'A186_S3_2'],
  },
  {
    id: 'A186_S3_1',
    [ContextFields.LABEL]: 'Selenium',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A186_S3',
  },
  {
    id: 'A186_S3_2',
    [ContextFields.LABEL]: 'Webcrawlers',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A186_S3',
  },
];


export const A186: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a186',
    [GeneralPaperFields.TITLE]: 'Near-Duplicate Detection in Web App Model Inference',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Rahulkrishna Yandrapally', 'Andrea Stocco', 'Ali Mesbah'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Britisch Columbia', 'Universita della Svizzera italiana' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA, Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'classifying states of webpages',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EVALUATION]: 'threshold',
    [CharacterizationFields.STATES_OF_ARTS]: 'comparing techniques',
    [CharacterizationFields.TESTING]: 'true',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A186]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: 'reference on future work',
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'study',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'selection of apps',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C2_2,
      IterationGroup.C4,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC4,
      ],
  }
};

