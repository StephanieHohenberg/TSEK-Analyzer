import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B098: MergedContextData[] = [
  {
    id: 'B098_S1',
    [ContextFields.LABEL]: 'Data Constraints',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'DATA',
    [ContextFields.SUB]: ['B098_S1_1', 'B098_S1_2', 'B098_S1_3', 'B098_S1_4', 'B098_S1_5'],
  },
  {
    id: 'B098_S1_1',
    [ContextFields.LABEL]: 'Managing Data Constraints',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B098_S1_1_1', 'B098_S1_1_2', 'B098_S1_1_3'],
    [ContextFields.PARENT]: 'B098_S1',
  },
  {
    id: 'B098_S1_1_1',
    [ContextFields.LABEL]: 'Data Length',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B098_S1_1',
  },
  {
    id: 'B098_S1_1_2',
    [ContextFields.LABEL]: 'Data Value',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B098_S1_1',
  },
  {
    id: 'B098_S1_1_3',
    [ContextFields.LABEL]: 'Data Property',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B098_S1_1',
  },
  {
    id: 'B098_S1_2',
    [ContextFields.LABEL]: 'Verifying Data Constraints',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B098_S1',
  },
  {
    id: 'B098_S1_3',
    [ContextFields.LABEL]: 'Verifying Web Applications using Constraints',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B098_S1',
  },
  {
    id: 'B098_S1_4',
    [ContextFields.LABEL]: 'Security/Privacy related Data Constraints',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B098_S1',
  },
  {
    id: 'B098_S1_5',
    [ContextFields.LABEL]: 'Leveraging Constraints for Performance Improvement',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B098_S1',
  },
  {
    id: 'B098_S2_1',
    [ContextFields.LABEL]: 'database-backed web applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B098_S2_2',
    [ContextFields.LABEL]: 'ORM applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B098_S2_3',
    [ContextFields.LABEL]: 'software with large amounts of persistent data',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B098_S2_4',
    [ContextFields.LABEL]: 'applications with millions of users',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
];

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
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: '"may not represent"',
    [GeneralizationFields.REFERENCE_EVALUATION]: '"real world issues in 12 representative open-source DB-backed applications"',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
