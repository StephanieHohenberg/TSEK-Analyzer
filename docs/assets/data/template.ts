import {CharacterizationFields} from '../../app/data/characterization.data';
import {GeneralizationFields} from '../../app/data/generalization.data';
import {AssumptionFields} from '../../app/data/assumption.data';
import {AnalysisPaperFields, GeneralPaperFields} from '../../app/data/paper.data';

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
