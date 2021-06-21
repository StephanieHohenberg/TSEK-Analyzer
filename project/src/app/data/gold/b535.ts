import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_B535: MergedContextData[] = [
  {
    id: 'B535_S1',
    [ContextFields.LABEL]: 'Crowdworking',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B535_S1_1', 'B535_S1_2'],
  },
  {
    id: 'B535_S1_1',
    [ContextFields.LABEL]: 'Crowdsource Software Development',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B535_S1'
  },
  {
    id: 'B535_S1_2',
    [ContextFields.LABEL]: 'Crowdtesting',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B535_S1'
  },
  {
    id: 'B535_S2',
    [ContextFields.LABEL]: 'Recommendation Systems',
    [ContextFields.SUB]: ['B535_S2_1', 'B535_S2_2', 'B535_S2_3', 'B535_S2_4'],
    [ContextFields.PARENT]: 'SYSTEMS'
  },
  {
    id: 'B535_S2_1',
    [ContextFields.LABEL]: 'Crowdworker Recommendation',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B535_S2'
  },
  {
    id: 'B535_S2_2',
    [ContextFields.LABEL]: 'Code Review Recommendation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B535_S2'
  },
  {
    id: 'B535_S2_3',
    [ContextFields.LABEL]: 'Expert Recommendation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B535_S2'
  },
  {
    id: 'B535_S2_4',
    [ContextFields.LABEL]: 'Developer Recommendation',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'B535_S2'
  },
  {
    id: 'B535_S3_1',
    [ContextFields.LABEL]: 'Bug Detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'BUG_DETECTION'
  },
  {
    id: 'B535_S3_2',
    [ContextFields.LABEL]: 'Bug Triage',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'BUG_HANDLING'
  },
  {
    id: 'B535_S4_1',
    [ContextFields.LABEL]: 'Open Source Software',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_SOURCING'
  },
  {
    id: 'B535_S4_2',
    [ContextFields.LABEL]: 'On Demand Web Storage',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_SPECIFIC'
  },
  {
    id: 'B535_S4_3',
    [ContextFields.LABEL]: 'Crowdsource Software',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_SOURCING'
  },
  {
    id: 'B535_5',
    [ContextFields.LABEL]: 'Crowdtesting Platform',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'APPLICATIONS'
  },
  {
    id: 'B535_S6_1',
    [ContextFields.LABEL]: 'Functional Tests',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'FUNC_TESTS'
  },
  {
    id: 'B535_S6_2',
    [ContextFields.LABEL]: 'Usability Tests',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'USABILITY_TESTS'
  },
  {
    id: 'B535_S6_3',
    [ContextFields.LABEL]: 'Security Tests',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'TEST_TYPES'
  },
  {
    id: 'B535_S6_4',
    [ContextFields.LABEL]: 'Performance Tests',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PERFORMANCE_TESTS'
  },
];

export const B535: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b535',
    [GeneralPaperFields.TITLE]: 'Context-aware In-process Crowdworker Recommendation',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: ['Junjie Wang', 'Ye Yang', 'Song Wang', 'Yuanzhe Hu', 'Dandan Wang', 'Qing Wang'],
    [GeneralPaperFields.UNIVERSITIES]: [
      'University of Chinese Academy of Sciences, Beijing, China',
      'School of Systems and Enterprises, Stevens Institute of Technology, USA',
      'Lassonde School of Engineering, York University, Canada',
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA, Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B535]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: 'implizit',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C1 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
