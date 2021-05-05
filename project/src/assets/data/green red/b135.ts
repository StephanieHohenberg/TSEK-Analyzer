import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B135: MergedContextData[] = [];

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
