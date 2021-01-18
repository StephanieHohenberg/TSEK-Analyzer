import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const B435: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b435',
    [GeneralPaperFields.TITLE]: 'Towards the Use of the Readily Available Tests from the Release Pipeline as Performance Tests. Are We There Yet?',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [ 'Zishuo Ding', 'Jinfu Chen', 'Weiyi Shang'],
    [GeneralPaperFields.UNIVERSITIES]: ['Concordia University, Montreal Canada'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'random forest classifiers',
    [CharacterizationFields.INSPECTION]: 'performance issues',
    [CharacterizationFields.EXPLORATORY_STUDY]: true,
    [CharacterizationFields.DL_NN]: 'random forest classifiers',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first study',
    [GeneralizationFields.REFERENCE_OTHER_STUDIES]: true,
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C1, IterationGroup.C2_2, IterationGroup.C3, IterationGroup.C4],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
