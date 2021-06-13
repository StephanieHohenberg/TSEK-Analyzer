import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B183: MergedContextData[] = [
  {
    id: 'B183_2',
    [ContextFields.LABEL]: 'Code Review Recommendations',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'CODE_REVIEW',
  },
  {
    id: 'B183_S3_1',
    [ContextFields.LABEL]: 'large and successful open source software projects that were led by either industry or a community',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B183_S3_2',
    [ContextFields.LABEL]: 'projects with big amount of files',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B183_S3_3',
    [ContextFields.LABEL]: 'projects where more than 25% of commits are reviewed via github',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B183_S3_4',
    [ContextFields.LABEL]: 'projects older than 4 years',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B183_S3_5',
    [ContextFields.LABEL]: 'smaller projects',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B183_S4_1',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'B183_S4_2',
    [ContextFields.LABEL]: 'Scala',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
    [ContextFields.HIDE]: true,
  },
  {
    id: 'B183_S4_3',
    [ContextFields.LABEL]: 'C#',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
    [ContextFields.HIDE]: true,
  },
];


export const B183: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b183',
    [GeneralPaperFields.TITLE]: 'Mitigating Turnover with Code Review Recommendation: Balancing Expertise, Workload, and Knowledge Distribution',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Ehsan Mirsaeedi', 'Peter C. Rigby'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Concordia University, Montréal' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'recommender',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: true,
    [CharacterizationFields.SIMULATION]: true,
    [CharacterizationFields.INTERVIEW]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B183]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'a novel evaluation framework for reviewer recommenders',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'selected projects',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_3,
      ],
  }
};

