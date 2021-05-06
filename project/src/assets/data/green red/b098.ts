import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B098: MergedContextData[] = [
  {
    id: 'B098_S1',
    [ContextFields.LABEL]: 'Data Constraints',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B098_S1_1', 'B098_S1_2', 'B098_S1_3', 'B098_S1_4', 'B098_S1_4'],
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
    id: 'B098_S2',
    [ContextFields.LABEL]: 'Applications',
    [ContextFields.SUB]: ['B098_S2_1', 'B098_S2_2', 'B098_S2_3', 'B098_S2_4'],
  },
  {
    id: 'B098_S2_1',
    [ContextFields.LABEL]: 'database-backed web applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B098_S2',
  },
  {
    id: 'B098_S2_2',
    [ContextFields.LABEL]: 'ORM applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B098_S2',
  },
  {
    id: 'B098_S2_3',
    [ContextFields.LABEL]: 'software with large amounts of persistent data',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B098_S2',
  },
  {
    id: 'B098_S2_4',
    [ContextFields.LABEL]: 'applications with millions of users',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B098_S2',
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
    [GeneralizationFields.NO_CLAIM]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: '"may not represent"',
    [GeneralizationFields.REFERENCE_EVALUATION]: '"real world issues in 12 representative open-source DB-backed applications"',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
