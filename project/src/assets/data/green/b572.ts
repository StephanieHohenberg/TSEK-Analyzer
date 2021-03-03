import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B572: MergedContextData[] = [];


export const B572: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b572',
    [GeneralPaperFields.TITLE]: 'How Does Misconfiguration of Analytic Services Compromise Mobile Privacy?',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Xueling Zhang', 'Xiaoyin Wang', 'Rocky Slavin',
      'Travis Breaux', 'Jianwei Niu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'University of Texas at San Antonio', 'Carnegie Mellon University'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.INSPECTION]: 'documentation of analytic services, app policies',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.EXPERIMENT]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B572]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: 'only the 1,000 apps',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.IC3_2,
      ],
  }
};

