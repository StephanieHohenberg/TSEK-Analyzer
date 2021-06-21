import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B447: MergedContextData[] = [
  {
    id: 'B447_S1',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.SUB]: ['B447_S1_1'],
  },
  {
    id: 'B447_S1_1',
    [ContextFields.LABEL]: 'Object-orientated languages',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B447_S1',
    [ContextFields.SUB]: ['B447_S1_1_1'],
  },
  {
    id: 'B447_S1_1_1',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B447_S1_1'
  },
  {
    id: 'B447_2',
    [ContextFields.LABEL]: 'real-world Java programs',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'JAVA_PROGRAMS'
  },
  {
    id: 'B447_S3_1',
    [ContextFields.LABEL]: 'Security Vulnerabilities',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
  },
  {
    id: 'B447_S3_2',
    [ContextFields.LABEL]: 'Null-Pointer Violations',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
  },
  {
    id: 'B447_S4',
    [ContextFields.LABEL]: 'Builder Frameworks',
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.SUB]: ['B447_S4_1', 'B447_S4_2'],
  },
  {
    id: 'B447_S4_1',
    [ContextFields.LABEL]: 'Lombok',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B447_S4',
  },
  {
    id: 'B447_S4_2',
    [ContextFields.LABEL]: 'AutoValue',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B447_S4',
  },
  {
    id: 'B447_S5_1',
    [ContextFields.LABEL]: 'projects with builder usages',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'PS_SPECIFIC',
  },
  {
    id: 'B447_S5_2',
    [ContextFields.LABEL]: 'projects using libraries which use builders for API objects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'PS_SPECIFIC',
  },
];


export const B447: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b447',
    [GeneralPaperFields.TITLE]: 'Verifying Object Construction',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Martin Kellogg', 'Manli Ran', 'Manu Sridharan', 'Martin Schäf', 'Michael D. Ernst'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Washington', 'UC Riverside', 'Amazon Web Services' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'accumulation analyisi, verifier',
    [CharacterizationFields.CASE_STUDY]: true,
    [CharacterizationFields.USER_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.SURVEY]: 'tied to case study',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B447]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'construct',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel special case',
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_2,
        AssumptionGroup.AC2_3,
        AssumptionGroup.IC4,
      ],
  }
};

