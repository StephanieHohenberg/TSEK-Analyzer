import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B348: MergedContextData[] = [];


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

