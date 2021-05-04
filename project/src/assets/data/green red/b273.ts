import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B273: MergedContextData[] = [];

const B273 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b273',
    [GeneralPaperFields.TITLE]: '',
    [GeneralPaperFields.AWARDS]: [],
    [GeneralPaperFields.AUTHORS]: [],
    [GeneralPaperFields.UNIVERSITIES]: [],
    [GeneralPaperFields.CONTINENTS]: [],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: '',
  },
  [AnalysisPaperFields.CONTEXTS]: [getContextTableData([ ...CONTEXT_B273 ])],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
  }
};
