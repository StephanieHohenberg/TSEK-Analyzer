import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A210: MergedContextData[] = [
  {
    id: 'A210_S1',
    [ContextFields.LABEL]: 'programming languages types',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.SUB]: ['A210_1', 'A210_2'],
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A210_1',
    [ContextFields.LABEL]: 'static typed languages',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.PARENT]: 'A210_S1',
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A210_2',
    [ContextFields.LABEL]: 'dynamic typed languages',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.PARENT]: 'A210_S1',
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A210_3',
    [ContextFields.LABEL]: 'Java', // TODO kommt auch als Eingrenzung, Abstract vor
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A210_4',
    [ContextFields.LABEL]: 'Python', // TODO kommt auch als Eingrenzung, Abstract vor
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.DIMENSION]: Dimension.PROGRAMMING_LANGUAGE,
  },
  {
    id: 'A210_5',
    [ContextFields.LABEL]: 'bug detection',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
  },
  {
    id: 'A210_6',
    [ContextFields.LABEL]: 'maintaining quality through refactoring',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
  },
  {
    id: 'A210_7',
    [ContextFields.LABEL]: 'protecting the security of products',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
  },
  {
    id: 'A210_8',
    [ContextFields.LABEL]: 'language migration tools',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
  },
  {
    id: 'A210_9',
    [ContextFields.LABEL]: 'semantic code clones',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
  },
  {
    id: 'A210_10',
    [ContextFields.LABEL]: 'syntactic code clones',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
  },
  {
    id: 'A210_S2',
    [ContextFields.LABEL]: 'clone detection',
    [ContextFields.SUB]: ['A210_11', 'A210_12', 'A21013'],
  },
  {
    id: 'A210_11',
    [ContextFields.LABEL]: 'cross-language clone detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A210_S2',
  },
  {
    id: 'A210_12',
    [ContextFields.LABEL]: 'multi language clone detection',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A210_S2',
  },
  {
    id: 'A210_13',
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
