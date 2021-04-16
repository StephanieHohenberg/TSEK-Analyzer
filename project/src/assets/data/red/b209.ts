import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B209: MergedContextData[] = [
  {
    id: 'B209_1',
    [ContextFields.LABEL]: 'Open Source projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.DIMENSION]: Dimension.SOURCING,
  },
  {
    id: 'B209_2',
    [ContextFields.LABEL]: 'effective funding',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
  },
  {
    id: 'B209_3',
    [ContextFields.LABEL]: 'npm Corpus',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
  },
  {
    id: 'B209_4',
    [ContextFields.LABEL]: 'Github Corpus',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
  },
  {
    id: 'B209_5',
    [ContextFields.LABEL]: 'active projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.DIMENSION]: Dimension.PROJECT,
  },
  {
    id: 'B209_6',
    [ContextFields.LABEL]: 'more mature projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.DIMENSION]: Dimension.PROJECT,
  },
  {
    id: 'B209_7',
    [ContextFields.LABEL]: 'popular projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.DIMENSION]: Dimension.PROJECT,
  },
  {
    id: 'B209_8',
    [ContextFields.LABEL]: 'projects in the need of financial aid',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.DIMENSION]: Dimension.PROJECT,
  },
];


export const B209: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b209',
    [GeneralPaperFields.TITLE]: 'How to Not Get Rich: An Empirical Study of Donations in Open Source',
    [GeneralPaperFields.AWARDS]: [Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Cassandra Overney', 'Jens Meinicke', 'Christian Kästner', 'Bogdan Vasilescu',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Olin College', 'Carnegie Mellon University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'GitHub',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EXPLORATORY_STUDY]: true,
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: true,
    [CharacterizationFields.APPLICATION_TARGET]: 'projects, donation platforms',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B209 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new research questions',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};