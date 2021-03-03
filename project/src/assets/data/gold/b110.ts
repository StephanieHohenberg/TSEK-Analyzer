import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {MergedContextData} from '../../../app/data/context.data';

export const CONTEXT_B110: MergedContextData[] = [];

export const B110: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b110',
    [GeneralPaperFields.TITLE]: 'Taxonomy of Real Faults in Deep Learning Systems',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Nargiz Humbatova', 'Gunel Jahangirova', 'Gabriele Bavota',
      'Vincenzo Riccio', 'Andrea Stocco', 'Paolo Tonella'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Università della Svizzera italiana' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'manual analysis of Github artefacts',
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.STRUCTURED_INTERVIEW]: true,
    [CharacterizationFields.SURVEY]: true,
    [CharacterizationFields.DL_NN]: 'DL',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B110]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'frameworks, dataset, interview',
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
