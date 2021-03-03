import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A125: MergedContextData[] = [
  {
    id: 'A125_1',
    [ContextFields.LABEL]: 'Dependency Conflicts',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A125_S1',
    [ContextFields.LABEL]: 'Python Library Ecosystems',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.SUB]: ['A125_S1_1', 'A125_S1_2'],
  },
  {
    id: 'A125_S1_1',
    [ContextFields.LABEL]: 'Python Package Index (PyPi)',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'A125_S1',
  },
  {
    id: 'A125_S1_2',
    [ContextFields.LABEL]: 'Anaconda',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.FUTURE_WORK,
    [ContextFields.PARENT]: 'A125_S1',
  },
  {
    id: 'A125_S2',
    [ContextFields.LABEL]: 'Root-cause Analysis',
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
    [ContextFields.SUB]: ['A125_S2_1', 'A125_S2_2', 'A124_S2_3'],
  },
  {
    id: 'A125_S2_1',
    [ContextFields.LABEL]: 'Build Failures',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A125_S2',
  },
  {
    id: 'A125_S2_2',
    [ContextFields.LABEL]: 'Semantic Inconsistencies',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A125_S2',
  },
  {
    id: 'A125_S2_3',
    [ContextFields.LABEL]: 'Runtime Errors',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
    [ContextFields.PARENT]: 'A125_S2',
  },
  {
    id: 'A125_2',
    [ContextFields.LABEL]: 'Github Projects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.DIMENSION]: Dimension.SOURCING,
  },
  {
    id: 'A125_3',
    [ContextFields.LABEL]: 'popular projects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
  },
  {
    id: 'A125_4',
    [ContextFields.LABEL]: 'projects used as a python library',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
  },
  {
    id: 'A125_5',
    [ContextFields.LABEL]: 'well-maintained projects',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
  },
  {
    id: 'A125_6',
    [ContextFields.LABEL]: 'Python',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
];

export const A125 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a125',
    [GeneralPaperFields.TITLE]: 'Revealing Injection Vulnerabilities by Leveraging Existing Tests',
    [GeneralPaperFields.AWARDS]: [ Award.GREEN, Award.RED ],
    [GeneralPaperFields.AUTHORS]: [
      'Ying Wang', 'Ming Wen', 'Yepang Liu',
      'Yibo Wang, Zhenming Li, Chao Wang', 'Hai Yu', 'Shing-Chi Cheung',
      'Chang Xu', 'Zhiliang Zhu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Software College, Northeastern University', 'School of Cyber Science and Engineering, HUST', 'SUSTech', 'HKUST', 'Nanjing University'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.INSPECTION]: 'manuelle Analyse von Dependency Conflict Issues',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A125 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: 'kurz',
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
