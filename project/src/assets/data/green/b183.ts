import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B183: MergedContextData[] = [
  {
    id: 'B183_1',
    [ContextFields.LABEL]: 'Code Review',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'B183_2',
    [ContextFields.LABEL]: 'Code Review Recommendations',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'B183_S3',
    [ContextFields.LABEL]: 'Project Characteristics',
    [ContextFields.SUB]: ['A258_S3_1', 'A258_S3_2', 'A258_S3_3', 'A258_S3_4', 'A258_S3_5'],
  },
  {
    id: 'B183_S3_1',
    [ContextFields.LABEL]: 'large and successful open source software projects that were led by either industry or a community',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B183_S3',
  },
  {
    id: 'B183_S3_2',
    [ContextFields.LABEL]: 'projects with big amount of files',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B183_S3',
  },
  {
    id: 'B183_S3_3',
    [ContextFields.LABEL]: 'projects where more than 25% of commits are reviewed via github',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B183_S3',
  },
  {
    id: 'B183_S3_4',
    [ContextFields.LABEL]: 'projects older than 4years',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'B183_S3',
  },
  {
    id: 'B183_S3_5',
    [ContextFields.LABEL]: 'smaller projects',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B183_S3',
  },
  {
    id: 'B183_S4',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.SUB]: ['A258_S4_1', 'A258_S4_2', 'A258_S4_3'],
  },
  {
    id: 'B183_S4_1',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'B183_S4',
  },
  {
    id: 'B183_S4_2',
    [ContextFields.LABEL]: 'Scala',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'B183_S4',
  },
  {
    id: 'B183_S4_3',
    [ContextFields.LABEL]: 'C#',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.DATA_PREPARATION,
    [ContextFields.PARENT]: 'B183_S4',
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

