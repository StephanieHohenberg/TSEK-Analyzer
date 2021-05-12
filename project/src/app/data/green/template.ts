import {AnalysisPaperData, AnalysisPaperFields, Award, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {MergedContextData} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B447: MergedContextData[] = [];


export const B447: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b447',
    [GeneralPaperFields.TITLE]: 'xxxx',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'xxx',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'xxx' ],
    [GeneralPaperFields.CONTINENTS]: [ ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'TODO',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'TODO',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B447]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'TODO',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
      IterationGroup.C2_1,
      IterationGroup.C3,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC1,
        AssumptionGroup.AC2_1,
      ],
  }
};

