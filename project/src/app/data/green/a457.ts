import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A457: MergedContextData[] = [
  {
    id: 'A457_S1_1',
    [ContextFields.LABEL]: 'Mulitple Entry Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A457_S1_2',
    [ContextFields.LABEL]: 'Single Entry Testing',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A457_S1_3',
    [ContextFields.LABEL]: 'GUI Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A457_S1_4',
    [ContextFields.LABEL]: 'GUI Exploration',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A457_S1_5',
    [ContextFields.LABEL]: 'e2e Testing',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A457_S2',
    [ContextFields.LABEL]: 'Android Applications',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.HIDE]: true,
    [ContextFields.PARENT]: 'MOBILE_APPLICATIONS',
  },
  {
    id: 'A457_S3',
    [ContextFields.LABEL]: 'large applications with several components',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
];


export const A457: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a457',
    [GeneralPaperFields.TITLE]: 'Multiple-Entry Testing of Android Applications by Constructing Activity Launching Contexts',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Jiwei Yan', 'Hao Liu', 'Linjie Pan',
      'Jun Yan', 'Jian Zhang', 'Bin Liang'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'University of Chinese Academy of Sciences', 'Bejing University of Technology', 'Renmin University of China'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'framework',
    [CharacterizationFields.BENCHMARK]: 'custom benchmark',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A457]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C2_2,
      IterationGroup.C4,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC4,
        AssumptionGroup.IC4,
      ],
  }
};

