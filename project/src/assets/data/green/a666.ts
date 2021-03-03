import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A666: MergedContextData[] = [];


export const A666: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a666',
    [GeneralPaperFields.TITLE]: 'Recognizing Developers’ Emotions while Programming',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Daniela Girardi', 'Nicole Novielli',
      'Davide Fucci', 'Filippo Lanubile',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Bari', 'Blekinge Institue of Technology' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.EXPLORATORY_STUDY]: true,
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: 'methods',
    [CharacterizationFields.EXPERIMENT]: 'self-assesment / self-report / (wristband) non-invasive biometric sensors for emotion recognition',
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.STRUCTURED_INTERVIEW]: true,
    [CharacterizationFields.DL_NN]: 'ML classifier',
    [CharacterizationFields.HUMAN_ASPECTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A666]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_1,
        AssumptionGroup.AC2_2,
        AssumptionGroup.IC4,
      ],
  }
};

