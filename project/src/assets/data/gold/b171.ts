import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const B171: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b171',
    [GeneralPaperFields.TITLE]: 'Primers or Reminders? The Effects of Existing Review Comments on Code Review',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Davide Spadini', 'Gül Çalikli', 'Alberto Bacchelli'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Delft University of Technology', 'Chalmers & University of Gothenburg', 'University of Zurich'
    ],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.CONTROLLED_EXPERIMENT]: true,
    [CharacterizationFields.PSYCHOLOGICAL_EXPERIMENT]: true,
    [CharacterizationFields.ONLINE_EXPERIMENT]: true,
    [CharacterizationFields.SURVEY]: 'questionnaire after the experiment',
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [IterationGroup.C1],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
