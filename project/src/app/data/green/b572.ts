import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B572: MergedContextData[] = [
  {
    id: 'B572_S0',
    [ContextFields.LABEL]: 'Analytic Services',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
  },
  {
    id: 'B572_S1',
    [ContextFields.LABEL]: 'Analytic Service Providers',
    [ContextFields.PARENT]: 'B572_S0',
    [ContextFields.SUB]: ['B572_S1_1', 'B572_S1_2', 'B572_S1_3', 'B572_S1_4', 'B572_S1_5', 'B572_S1_6', 'B572_S1_7',
                          'B572_S1_8', 'B572_S1_9', 'B572_S1_10', 'B572_S1_11', 'B572_S1_12', 'B572_S1_13'],
  },
  {
    id: 'B572_S1_1',
    [ContextFields.LABEL]: 'Firebase',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_2',
    [ContextFields.LABEL]: 'Google Analytics',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_3',
    [ContextFields.LABEL]: 'Flurry',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_4',
    [ContextFields.LABEL]: 'Mixpanel',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_5',
    [ContextFields.LABEL]: 'Crashlytics',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_6',
    [ContextFields.LABEL]: 'AppsFlyer',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_7',
    [ContextFields.LABEL]: 'Tune',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_8',
    [ContextFields.LABEL]: 'IronSource',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_9',
    [ContextFields.LABEL]: 'Applovin',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_10',
    [ContextFields.LABEL]: 'Leanplum',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_11',
    [ContextFields.LABEL]: 'Branch',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_12',
    [ContextFields.LABEL]: 'Appsee',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_S1_13',
    [ContextFields.LABEL]: 'Newrelic',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'B572_S1',
  },
  {
    id: 'B572_2',
    [ContextFields.LABEL]: 'Android Applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.PARENT]: 'MOBILE_APPLICATIONS',
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
  },
  {
    id: 'B572_S3',
    [ContextFields.LABEL]: 'Applications of Analytic Services',
    [ContextFields.PARENT]: 'B572_S0',
    [ContextFields.SUB]: ['B572_S3_1', 'B572_S3_2', 'B572_S3_3'],
  },
  {
    id: 'B572_3_1',
    [ContextFields.LABEL]: 'Debugging',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B572_S3',
  },
  {
    id: 'B572_3_2',
    [ContextFields.LABEL]: 'Service Quality Improvement',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B572_S3',
  },
  {
    id: 'B572_3_3',
    [ContextFields.LABEL]: 'Advertisement',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B572_S3',
  },
];


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

