import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A210: MergedContextData[] = [
  {
    id: 'A210_S1_1',
    [ContextFields.LABEL]: 'static typed languages',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
    [ContextFields.SUB]: ['A210_3'],
  },
  {
    id: 'A210_S1_2',
    [ContextFields.LABEL]: 'dynamic typed languages',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.PARENT]: 'PROGRAMMING_LANGUAGES',
    [ContextFields.SUB]: ['A210_4'],
  },
  {
    id: 'A210_3',
    [ContextFields.LABEL]: 'Java', // TODO kommt auch als Eingrenzung, Abstract vor
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A210_S1_1',
  },
  {
    id: 'A210_4',
    [ContextFields.LABEL]: 'Python', // TODO kommt auch als Eingrenzung, Abstract vor
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A210_S1_2',
  },
  {
    id: 'A210_S4',
    [ContextFields.LABEL]: 'clone detection',
    [ContextFields.SUB]: ['A210_S5', 'A210_S3', 'A210_S2'],
  },
  {
    id: 'A210_S5',
    [ContextFields.LABEL]: 'applications of code dection',
    [ContextFields.SUB]: ['A210_S5_1', 'A210_S5_2', 'A210_S5_3', 'A210_S5_4'],
    [ContextFields.PARENT]: 'A210_S4',
  },
  {
    id: 'A210_S5_1',
    [ContextFields.LABEL]: 'bug detection',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A210_S5',
  },
  {
    id: 'A210_S5_2',
    [ContextFields.LABEL]: 'maintaining quality through refactoring',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A210_S5',
  },
  {
    id: 'A210_S5_3',
    [ContextFields.LABEL]: 'protecting the security of products',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A210_S5',
  },
  {
    id: 'A210_S5_4',
    [ContextFields.LABEL]: 'language migration tools',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A210_S5',
  },
  {
    id: 'A210_S3',
    [ContextFields.LABEL]: 'code clones',
    [ContextFields.SUB]: ['A210_S3_1', 'A210_S3_2'],
    [ContextFields.PARENT]: 'A210_S4',
  },
  {
    id: 'A210_S3_1',
    [ContextFields.LABEL]: 'semantic',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A210_S3',
  },
  {
    id: 'A210_S3_2',
    [ContextFields.LABEL]: 'syntactic',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A210_S3',
  },
  {
    id: 'A210_S2',
    [ContextFields.LABEL]: 'types of clone detection',
    [ContextFields.SUB]: ['A210_S2_1', 'A210_S2_2', 'A210_S2_3'],
    [ContextFields.PARENT]: 'A210_S4',
  },
  {
    id: 'A210_S2_1',
    [ContextFields.LABEL]: 'cross-language clone detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A210_S2',
  },
  {
    id: 'A210_S2_2',
    [ContextFields.LABEL]: 'multi language clone detection',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A210_S2',
  },
  {
    id: 'A210_S2_3',
    [ContextFields.LABEL]: 'single language clone detection',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A210_S2',
  },


];

export const A210: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a210',
    [GeneralPaperFields.TITLE]: 'SLACC: Simion-based Language Agnostic Code Clones',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'George Mathew', 'Chris Parnin', 'Kathryn T Stolee',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'North Carolina State University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to an other tool',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A210 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: 'kurz',
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C2_2 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
