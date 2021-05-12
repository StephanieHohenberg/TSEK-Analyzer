import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B359: MergedContextData[] = [
  {
    id: 'B359_1',
    [ContextFields.LABEL]: 'Program Analysis',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'B359_S2',
    [ContextFields.LABEL]: 'Code Comments',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'NATURAL_LANGUAGES',
    [ContextFields.SUB]: ['B359_S2_1', 'B359_S2_2', 'B359_S2_3'],
  },
  {
    id: 'B359_S2_1',
    [ContextFields.LABEL]: 'Comment Classification',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B359_S2',
  },
  {
    id: 'B359_S2_2',
    [ContextFields.LABEL]: 'Comment Generation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B359_S2',
  },
  {
    id: 'B359_S2_3',
    [ContextFields.LABEL]: 'Comment-Code Inconsistency Detection',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B359_S2',
  },
  {
    id: 'B359_S3_1',
    [ContextFields.LABEL]: 'larger software systems with lots of comments',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B359_S3_2',
    [ContextFields.LABEL]: 'software systems without a standard towards comments',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
];


export const B359: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b359',
    [GeneralPaperFields.TITLE]: 'CPC: Automatically Classifying and Propagating Natural Language Comments via Program Analysis',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Juan Zhai', 'Xiangzhe Xu', 'Yu Shi', 'Guanhong Tao',
      'Minxue Pan', 'Shiqing Ma', 'Lei Xu', 'Weifeng Zhang',
      'Lin Tan', 'Xiangyu Zhang'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Purdue University', 'Rutgers University', 'Nanjing University', 'Nanjing University of Posts and Telecommunications'],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'prototype',
    [CharacterizationFields.INSPECTION]: 'program analysis',
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.USER_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to other algorithms',
    [CharacterizationFields.DL_NN]: 'ML algorithms',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B359]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
      IterationGroup.C3,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_3,
      AssumptionGroup.AC3,
      AssumptionGroup.IC4,
    ],
  }
};

