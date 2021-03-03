import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {MergedContextData} from '../../../app/data/context.data';

export const CONTEXT_A691: MergedContextData[] = [];

export const A691: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a691',
    [GeneralPaperFields.TITLE]: 'Here We Go Again: Why Is It Difficult for Developers to Learn Another Programming Language?',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Nishal Shrestha', 'Colton Botta',
      'Titus Barik', 'Chris Parnin',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'NC State University', 'Microsoft'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'Stackoverflow',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.SEMI_STRUCTURED_INTERVIEW]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A691]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.NO_FOCUS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C2_1 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
