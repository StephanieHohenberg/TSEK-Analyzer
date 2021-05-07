import {
  AnalysisPaperData,
  AnalysisPaperFields,
  Award,
  Continent,
  GeneralPaperFields
} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A824: MergedContextData[] = [
  {
    id: 'A824_S1',
    [ContextFields.LABEL]: 'Static Analysis', // TODO
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['A824_S1_1', 'A824_S1_2'],
  },
  {
    id: 'A824_S1_1',
    [ContextFields.LABEL]: 'Bug detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A824_S1',
  },
  {
    id: 'A824_S1_2',
    [ContextFields.LABEL]: 'QA',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A824_S1',
  },
  {
    id: 'A824_2',
    [ContextFields.LABEL]: 'Program Transformation',  // TODO
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A824_S3_1',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
  },
  {
    id: 'A824_S3_2',
    [ContextFields.LABEL]: 'C',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
  },
  {
    id: 'A824_S3_3',
    [ContextFields.LABEL]: 'PHP',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
  },
  {
    id: 'A824_S4',
    [ContextFields.LABEL]: 'Analysis Tools',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.SUB]: ['A824_S4_1', 'A824_S4_2', 'A824_S4_3', 'A824_S4_4', 'A824_S4_5'],
  },
  {
    id: 'A824_S4_1',
    [ContextFields.LABEL]: 'Clang',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A824_S4',
  },
  {
    id: 'A824_S4_2',
    [ContextFields.LABEL]: 'Infer',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A824_S4',
  },
  {
    id: 'A824_S4_3',
    [ContextFields.LABEL]: 'PHPStan',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A824_S4',
  },
  {
    id: 'A824_S4_4',
    [ContextFields.LABEL]: 'SpotBugs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A824_S4',
  },
  {
    id: 'A824_S4_5',
    [ContextFields.LABEL]: 'CodeSonar',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A824_S4',
  },
];


export const A824: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a824',
    [GeneralPaperFields.TITLE]: 'Tailoring Programs for Static Analysis via Program Transformation',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Rijnard van Tonder', 'Claire Le Goues'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Carnegie Mellon University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.INSPECTION]: 'github issues tracker',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.EXPERIMENT]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A824]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_3
      ],
  }
};

