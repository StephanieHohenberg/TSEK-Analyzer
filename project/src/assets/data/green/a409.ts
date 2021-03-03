import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A409: MergedContextData[] = [];


export const A409: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a409',
    [GeneralPaperFields.TITLE]: 'A Study on the Prevalence of Human Values in Software Engineering Publications, 2015 – 2018',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Harsha Perera', 'Waqar Hussain', 'Jon Whittle',
      'Arif Nurwidyantoro', 'Davoud Mougouei', 'Rifat Ara Shams',
      'Gillian Oliver',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Monash University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.OCEANIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'investigation of SE conferences, journals, manual classification',
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A409]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'using 1350 papers published',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: 'selected papers, conference venues',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_2,
        AssumptionGroup.IC2,
      ],
  }
};

