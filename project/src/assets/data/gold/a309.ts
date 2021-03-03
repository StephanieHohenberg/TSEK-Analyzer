import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {MergedContextData} from '../../../app/data/context.data';

export const CONTEXT_A309: MergedContextData[] = [];

export const A309: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a309',
    [GeneralPaperFields.TITLE]: 'Translating Video Recordings of Mobile App Usages into Replayable Scenarios',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Carlos Bernal-Cárdenas', 'Nathan Cooper', 'Kevin Moran',
      'Oscar Chaparro', 'Andrian Marcus', 'Denys Poshyvanyk'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'William & Mary', 'The University of Texas at Dallas'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.CASE_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.DL_NN]: 'Tensorflow (object detection, image classification)',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A309]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'number and diversity apps, interview',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: 'large-scale study with 64 of the top applications',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C1, IterationGroup.C2_2, IterationGroup.C3],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
