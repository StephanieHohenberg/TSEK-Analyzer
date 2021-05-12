import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B509: MergedContextData[] = [
  {
    id: 'B509_1',
    [ContextFields.LABEL]: 'Highly Configurable Software',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.PARENT]: 'DEV_OPS',
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'B509_S2',
    [ContextFields.LABEL]: 'Product Discovery',
    [ContextFields.PARENT]: 'DEV_OPS',
    [ContextFields.SUB]: ['B509_S2_1', 'B509_S2_2', 'B509_S2_3'],
  },
  {
    id: 'B509_S2_1',
    [ContextFields.LABEL]: 'Lazy Product Discovery',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B509_S2',
  },
  {
    id: 'B509_S2_2',
    [ContextFields.LABEL]: 'Standard Product Discovery',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B509_S2',
  },
  {
    id: 'B509_S2_3',
    [ContextFields.LABEL]: 'Interactive Product Discovery',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.FUTURE_WORK,
    [ContextFields.PARENT]: 'B509_S2',
  },
];

export const B509 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b509',
    [GeneralPaperFields.TITLE]: 'Lazy Product Discovery in Huge Configuration Spaces',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Michael Lienhardt', 'Ferrucio Damiani', 'Einar Broch Johnsen', 'Jacopo Mauro'],
    [GeneralPaperFields.UNIVERSITIES]: ['ONERA - The French Aerospace Lab France', 'University of Turin', 'University of Oslo', 'University of Southern Denmark'],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'formalised method',
    [CharacterizationFields.EVALUATION]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B509 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel method',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: '"1000 product-discovery", "lack of benchmark"',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
