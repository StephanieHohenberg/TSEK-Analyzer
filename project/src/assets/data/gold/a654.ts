import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const A654: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a654',
    [GeneralPaperFields.TITLE]: 'A Tale from the Trenches: Cognitive Biases and Software Development',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Souti Chattopadhyay', 'Nicholas Nelson', 'Audrey Au',
      'Natalia Morales', 'Christopher Sanchez', 'Rahul Pandita', 'Anita Sarma',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Oregon State University, Corvallis', 'Phase Change Software'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.FIELD_STUDY]: true,
    [CharacterizationFields.CONTROLLED_EXPERIMENT]: true,
    [CharacterizationFields.INTERVIEW]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.NO_FOCUS]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C2_1 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
