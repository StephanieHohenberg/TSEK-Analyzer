import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_A714: MergedContextData[] = [
  {
    id: 'A714_0',
    [ContextFields.LABEL]: 'verification techniques',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.SUB]: ['A714_0_1'],
  },
  {
    id: 'A714_0_1',
    [ContextFields.LABEL]: 'differential verification',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A714_0',
  },
  {
    id: 'A714_X',
    [ContextFields.LABEL]: 'control applications, where the number of input signals is not large',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A714_S1_1',
    [ContextFields.LABEL]: 'DNN',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'NEURAL_NETWORKS',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'A714_S1_2',
    [ContextFields.LABEL]: 'compressed network',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'NEURAL_NETWORKS',
  },
  {
    id: 'A714_S1_3',
    [ContextFields.LABEL]: 'single network',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'NEURAL_NETWORKS',
  },
  {
    id: 'A714_S1_5',
    [ContextFields.LABEL]: 'feed-forward ReLU networks',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'NEURAL_NETWORKS',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'A714_S1_6',
    [ContextFields.LABEL]: 'CNN (convolutional neural networks)',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'NEURAL_NETWORKS',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'A714_S1_4',
    [ContextFields.LABEL]: 'relationship between networks',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'NEURAL_NETWORKS',
    [ContextFields.SUB]: ['A714_S1_7'],
  },
  {
    id: 'A714_S1_7',
    [ContextFields.LABEL]: 'relational abstract domains',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A714_S1_4',
    [ContextFields.SUB]: ['A714_S1_8', 'A714_S1_9'],
  },
  {
    id: 'A714_S1_8',
    [ContextFields.LABEL]: 'octagon domains',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A714_S1_7',
  },
  {
    id: 'A714_S1_9',
    [ContextFields.LABEL]: 'polyhedral domains',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A714_S1_7',
  },
  {
    id: 'A714_S2',
    [ContextFields.LABEL]: 'applications for neural networks',
    [ContextFields.SUB]: ['A714_S2_1', 'A714_S2_5', 'A714_S2_6' ],
    [ContextFields.PARENT]: 'APPLICATIONS'
  },
  {
    id: 'A714_S2_1',
    [ContextFields.LABEL]: 'safety cirtical systems',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A714_S2',
    [ContextFields.SUB]: [ 'A714_S2_2', 'A714_S2_3', 'A714_S2_4' ],
  },
  {
    id: 'A714_S2_2',
    [ContextFields.LABEL]: 'aircraft collision avoidance',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A714_S2_1',
  },
  {
    id: 'A714_S2_3',
    [ContextFields.LABEL]: 'aircraft collision detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A714_S2_1',
  },
  {
    id: 'A714_S2_4',
    [ContextFields.LABEL]: 'autonomous driving',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A714_S2_1',
  },
  {
    id: 'A714_S2_5',
    [ContextFields.LABEL]: 'image recognition',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A714_S2',
  },
  {
    id: 'A714_S2_6',
    [ContextFields.LABEL]: 'human activity recognition',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A714_S2',
  },
];

export const A714: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a714',
    [GeneralPaperFields.TITLE]: 'ReluDiff: Differential Verification of Deep Neural Networks',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Brandon Paulsen', 'Jingbo Wang', 'Chao Wang',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of South Carolina' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'method',
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'DNN',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A714 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: 'kurz',
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new method',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3, IterationGroup.C4 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
