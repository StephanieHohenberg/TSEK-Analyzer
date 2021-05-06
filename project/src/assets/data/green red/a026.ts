import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A026: MergedContextData[] = [
  {
    id: 'A026_1',
    [ContextFields.LABEL]: 'Fault Detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A026_2',
    [ContextFields.LABEL]: 'Puppet Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A026_3',
    [ContextFields.LABEL]: 'other domains with partially ordered constructs',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
  },
];

export const A026 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a026',
    [GeneralPaperFields.TITLE]: 'Practical Fault Detection in Puppet Programs',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Thodoris Sotiropoulos', 'Dimitris Mitropoulos', 'Diomidis Spinellis'],
    [GeneralPaperFields.UNIVERSITIES]: ['Athens University of Economics and Business', 'National Infrastructures for Research and Technology GRNET'],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: 'performance benchmark',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A026 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
