import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B098: MergedContextData[] = [];

export const B098 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b098',
    [GeneralPaperFields.TITLE]: 'Managing data constraints in database-backed web applications',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Junwen Yang', 'Utsav Sethi', 'Cong Yan', 'Alvin Cheung', 'Shan Lu'],
    [GeneralPaperFields.UNIVERSITIES]: ['University of Chicago', 'University of Washington', 'University of California'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'tool',
    [CharacterizationFields.INSPECTION]: 'source code, commit history, issue tracking system of ruby-on-rails applications',
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.USER_STUDY]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B098 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.NO_CLAIM]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: '"may not represent"',
    [GeneralizationFields.REFERENCE_EVALUATION]: '"real world issues in 12 representative open-source DB-backed applications"',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
