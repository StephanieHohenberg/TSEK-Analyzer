import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B447: MergedContextData[] = [];


export const B447: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b447',
    [GeneralPaperFields.TITLE]: 'Verifying Object Construction',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Martin Kellogg', 'Manli Ran', 'Manu Sridharan', 'Martin Schäf', 'Michael D. Ernst'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Washington', 'UC Riverside', 'Amazon Web Services' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'accumulation analyisi, verifier',
    [CharacterizationFields.CASE_STUDY]: true,
    [CharacterizationFields.USER_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.SURVEY]: 'tied to case study',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B447]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'construct',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel special case',
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_2,
        AssumptionGroup.AC2_3,
        AssumptionGroup.IC4,
      ],
  }
};

