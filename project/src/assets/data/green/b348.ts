import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B348: MergedContextData[] = [
  {
    id: 'B348_S1',
    [ContextFields.LABEL]: 'Languages',
    [ContextFields.SUB]: ['B348_S1_1', 'B348_S1_2'],
  },
  {
    id: 'B348_S1_1',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B348_S1',
    [ContextFields.SUB]: ['B348_S1_1_1'],
  },
  {
    id: 'B348_S1_1_1',
    [ContextFields.LABEL]: 'C/C++',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S1_1',
  },
  {
    id: 'B348_S1_2',
    [ContextFields.LABEL]: 'Natural Languages',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B348_S1',
    [ContextFields.SUB]: ['B348_S1_2_1'],
  },
  {
    id: 'B348_S1_2_1',
    [ContextFields.LABEL]: 'English',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S1_2',
  },
  {
    id: 'B348_S2',
    [ContextFields.LABEL]: 'Developer Communication',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['B348_S2_1', 'B348_S2_2', 'B348_S2_3', 'B348_S2_4'],
  },
  {
    id: 'B348_S2_1',
    [ContextFields.LABEL]: 'Mailing Lists',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S2',
  },
  {
    id: 'B348_S2_2',
    [ContextFields.LABEL]: 'Documentation',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S2',
  },
  {
    id: 'B348_S2_3',
    [ContextFields.LABEL]: 'Bug Discussions',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S2',
  },
  {
    id: 'B348_S2_4',
    [ContextFields.LABEL]: 'Online Fora',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S2',
    [ContextFields.SUB]: ['B348_S2_4_1'],
  },
  {
    id: 'B348_S2_4_1',
    [ContextFields.LABEL]: 'Stackoverflow',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S2_4',
  },
  {
    id: 'B348_S3',
    [ContextFields.LABEL]: 'Natural Language Processing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['B348_S3_1', 'B348_S3_2', 'B348_S3_3', 'B348_S3_4', 'B348_S3_5'],
  },
  {
    id: 'B348_S3_1',
    [ContextFields.LABEL]: 'Language Identification',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B348_S3',
  },
  {
    id: 'B348_S3_2',
    [ContextFields.LABEL]: 'Token Tagging',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B348_S3',
  },
  {
    id: 'B348_S3_3',
    [ContextFields.LABEL]: 'Language Segmentation',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B348_S3',
  },
  {
    id: 'B348_S3_4',
    [ContextFields.LABEL]: 'Mixed Text Tagging',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S3',
  },
  {
    id: 'B348_S3_5',
    [ContextFields.LABEL]: 'Code Switching',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B348_S3',
  },
];


export const B348: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b348',
    [GeneralPaperFields.TITLE]: 'POSIT: Simultaneously Tagging Natural and Programming Languages',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Profir-Petru Pârtachi', 'Santanu Kumar Dash',
      'Christoph Treude', 'Earl T. Barr',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University College London', 'University of Surrey', 'University of Adelaide' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA, Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.INSPECTION]: 'Stack Overflow',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'biLSTM network',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B348]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
      IterationGroup.C3,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC3,
      ],
  }
};

