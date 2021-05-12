import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B209: MergedContextData[] = [
  {
    id: 'B209_1',
    [ContextFields.LABEL]: 'Open Source projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B209_2',
    [ContextFields.LABEL]: 'effective funding',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'HUMAN_ASPECTS',
  },
  {
    id: 'B209_3',
    [ContextFields.LABEL]: 'npm Corpus',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_STUDY_CHARACTERISTICS',
  },
  {
    id: 'B209_4',
    [ContextFields.LABEL]: 'Github Corpus',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_STUDY_CHARACTERISTICS',
  },
  {
    id: 'B209_5',
    [ContextFields.LABEL]: 'active projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B209_6',
    [ContextFields.LABEL]: 'more mature projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B209_7',
    [ContextFields.LABEL]: 'popular projects',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
  },
  {
    id: 'B209_8',
    [ContextFields.LABEL]: 'projects in the need of financial aid',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RESULTS_ANALYSIS,
    [ContextFields.PARENT]: 'PS_PROJECT_CHARACTERISTICS',
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
