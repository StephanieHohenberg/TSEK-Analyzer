import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const B073: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b073',
    [GeneralPaperFields.TITLE]: 'Big Code != Big Vocabulary: Open-Vocabulary Models for Source Code',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Rafael-Michael Karampatsis', 'Hlib Babii', 'Romain Robbes',
      'Charles Sutton', 'Andrea Janes'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'University of Edinburgh', 'Free University of Bozen-Bolzano',
      'Google Research and University of Edinburgh'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'mining C, Python, Java corpora',
    [CharacterizationFields.DL_NN]: 'Neural Language Models',
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
