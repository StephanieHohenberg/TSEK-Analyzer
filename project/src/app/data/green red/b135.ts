import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B135: MergedContextData[] = [
  {
    id: 'B135_1',
    [ContextFields.LABEL]: 'Automated DNN Repair',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'AUTOMATED_REPAIR',
  },
  {
    id: 'B135_S2',
    [ContextFields.LABEL]: 'DL Libraries',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'DL_TOOLS',
    [ContextFields.SUB]: ['B135_S2_1', 'KERAS', 'B135_S2_3', 'B135_S2_4', 'B135_S2_5'],
  },
  {
    id: 'B135_S2_1',
    [ContextFields.LABEL]: 'Caffe',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B135_S2',
  },
  {
    id: 'B135_S2_2',
    [ContextFields.LABEL]: 'Keras',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'KERAS',
  },
  {
    id: 'B135_S2_3',
    [ContextFields.LABEL]: 'Tensorflow',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TENSORFLOW',
  },
  {
    id: 'B135_S2_4',
    [ContextFields.LABEL]: 'Theano',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B135_S2',
  },
  {
    id: 'B135_S2_5',
    [ContextFields.LABEL]: 'Torch',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B135_S2',
  },
];

export const B135 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b135',
    [GeneralPaperFields.TITLE]: 'Repairing Deep Neural Networks: Fix Patterns and Challenges',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Md Johirul Islam', 'Rangeet Pan', 'Giang Nguyen', 'Hrisdesh Rajan'],
    [GeneralPaperFields.UNIVERSITIES]: ['Iowa State University'],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'benchmark',
    [CharacterizationFields.INSPECTION]: 'Stackover/ Github repairs',
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: 'open coding',
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.DL_NN]: 'DNN',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B135 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
    [GeneralizationFields.REFERENCE_IMPLEMENTATION]: 'dataset used',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
