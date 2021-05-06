import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A615: MergedContextData[] = [
  {
    id: 'A615_1',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A335_S2',
    [ContextFields.LABEL]: 'Applications',
    [ContextFields.SUB]: ['A335_S2_1', 'A335_S2_2', 'A335_S2_3'],
  },
  {
    id: 'A335_S2_1',
    [ContextFields.LABEL]: 'Test Suite based program repair',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A335_S2',
  },
  {
    id: 'A335_S2_2',
    [ContextFields.LABEL]: 'Java Programs',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A335_S2',
  },
  {
    id: 'A335_S2_3',
    [ContextFields.LABEL]: 'Standalone Automated Program Repair Systems',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A335_S2',
  },
];

export const A615 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a615',
    [GeneralPaperFields.TITLE]: 'On the Efficiency of Test Suite based Program Repair',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Kui Liu', 'Shangwen Wang', 'Anil Koyuncu Kisub Kim', 'Tegawende F. Bissyande', 'Dongsun Kim', 'Peng Wu', 'Jacques Klein', 'Xiaoguang Mao', 'Yves Le Traon'],
    [GeneralPaperFields.UNIVERSITIES]: ['Nanjing University of Aeronautics and Austronautics', 'National University of Defense Technology', 'University of Luxembourg', 'Furiosa.ai'],
    [GeneralPaperFields.CONTINENTS]: [Continent.ASIA, Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'systematic assessment of automated repair systems',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.BENCHMARK]: 'Defects4J',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A615 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
