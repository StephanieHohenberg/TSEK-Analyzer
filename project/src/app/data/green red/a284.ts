import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A284: MergedContextData[] = [
  {
    id: 'A283_S1',
    [ContextFields.LABEL]: 'injection vulnerabilities and attacks',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.SUB]: ['A283_S1_1', 'A283_S1_2', 'A283_S1_3', 'A283_S1_4', 'A283_S1_5', 'A283_S1_6', 'A283_S1_7'],
  },
  {
    id: 'A283_S1_1',
    [ContextFields.LABEL]: 'code injection attacks',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_S1_2',
    [ContextFields.LABEL]: 'vulnerabilities caused by source-sink flows, that are exposed by test cases',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_S1_3',
    [ContextFields.LABEL]: 'vulnerabilities caused by non-deterministic flows',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_S1_4',
    [ContextFields.LABEL]: 'XSS attacks by open redirection vulnerabilities',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_S1_5',
    [ContextFields.LABEL]: 'SQL injection',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_S1_6',
    [ContextFields.LABEL]: 'XML injection vulnerabilities',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_S1_7',
    [ContextFields.LABEL]: 'RCE injection attacks',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A283_S1',
  },
  {
    id: 'A283_1',
    [ContextFields.LABEL]: 'critical web applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A283_2',
    [ContextFields.LABEL]: 'complicated stateful web applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A283_3',
    [ContextFields.LABEL]: 'safety-critical, similar \'high-assurance\' software',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A283_S2',
    [ContextFields.LABEL]: 'Type of Data',
    [ContextFields.PARENT]: 'DATA',
    [ContextFields.SUB]: ['A283_S2_1', 'A283_S2_2', 'A283_S2_3' ],
  },
  {
    id: 'A283_S2_1',
    [ContextFields.LABEL]: 'individual private data',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S2',
  },
  {
    id: 'A283_S2_2',
    [ContextFields.LABEL]: 'sensitive financial data',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S2',
  },
  {
    id: 'A283_S2_3',
    [ContextFields.LABEL]: 'healthcare',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A283_S2',
  },
  {
    id: 'A283_S3',
    [ContextFields.LABEL]: 'security assurance',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.SUB]: ['A283_S3_1', 'A283_S3_2', 'A283_S3_S4'],
  },
  {
    id: 'A283_S3_1',
    [ContextFields.LABEL]: 'code review',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S3',
  },
  {
    id: 'A283_S3_2',
    [ContextFields.LABEL]: 'code analysis by static analyzers',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S3',
  },
  {
    id: 'A283_S3_S4',
    [ContextFields.LABEL]: 'taint tracking',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S3',
  },
  {
    id: 'A283_S3_S4_1',
    [ContextFields.LABEL]: 'taint tracking during runtime',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S3_S4',
  },
  {
    id: 'A283_S3_S4_2',
    [ContextFields.LABEL]: 'taint tracking by input generation',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A283_S3_S4',
  },
  {
    id: 'A283_4',
    [ContextFields.LABEL]: 'Open Source Projects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.HIDE]: true,
    [ContextFields.PARENT]: 'SOURCING',
  },
  {
    id: 'A283_5',
    [ContextFields.LABEL]: 'Functional Tests',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TEST_TYPES',
  },
  {
    id: 'A283_6',
    [ContextFields.LABEL]: 'test cases that expose an information flow',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
];

export const A284 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a284',
    [GeneralPaperFields.TITLE]: 'Revealing Injection Vulnerabilities by Leveraging Existing Tests',
    [GeneralPaperFields.AWARDS]: [ Award.GREEN, Award.RED ],
    [GeneralPaperFields.AUTHORS]: [
      'Katherine Hough', 'Gebrehiwet Welearegai', 'Christian Hammer', 'Jonathan Bell',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'George Mason University', 'University of Potsdam'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA, Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.BENCHMARK]: 'Juliet, OWASP, Securibench-Micro, WavSep',
    [CharacterizationFields.STATES_OF_ARTS]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A284 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'internal validity',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new approach',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
