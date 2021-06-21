import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A566: MergedContextData[] = [
  {
    id: 'A566_S1',
    [ContextFields.LABEL]: 'Data-driven defect prediction',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['A566_S1_1'],
    [ContextFields.PARENT]: 'DATA',
  },
  {
    id: 'A566_S1_1',
    [ContextFields.LABEL]: 'Cross-project defect prediction (CPDP)',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A566_S1',
  },
  {
    id: 'A566_S2_1',
    [ContextFields.LABEL]: 'projects with limited software quality assurance resources',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_RESOURCES',
  },
  {
    id: 'A566_S2_2',
    [ContextFields.LABEL]: 'brand new projects',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_CHAR',
  },
  {
    id: 'A566_S2_3',
    [ContextFields.LABEL]: 'small projects',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_SIZE',
  },
  {
    id: 'A566_S3',
    [ContextFields.LABEL]: 'CPDP techniques and datasets',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
];


export const A566: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a566',
    [GeneralPaperFields.TITLE]: 'Understanding the Automated Parameter Optimization on Transfer Learning for Cross-Project Defect Prediction: An Empirical Study',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Ke Li♮', ', Zilin Xiang', 'Tao Chen', 'Shuo Wang', 'Kay Chen Tan',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Exeter', 'Loughborough University', 'University of Birmingham', 'University of Hong Kong' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE, Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.BENCHMARK]: 'performance indicator AUC',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DATA]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A566]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first study',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.IC2,
      ],
  }
};

