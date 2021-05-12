import {CharacterizationFields} from '../model/characterization.data';
import {GeneralizationFields} from '../model/generalization.data';
import {AssumptionFields} from '../model/assumption.data';
import {AnalysisPaperFields, GeneralPaperFields} from '../model/paper.data';

const Template = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b535',
    [GeneralPaperFields.TITLE]: '',
    [GeneralPaperFields.AWARDS]: [],
    [GeneralPaperFields.AUTHORS]: [],
    [GeneralPaperFields.UNIVERSITIES]: [],
    [GeneralPaperFields.CONTINENTS]: [],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: '',
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
