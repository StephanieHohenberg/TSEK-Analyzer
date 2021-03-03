import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A186: MergedContextData[] = [];


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

