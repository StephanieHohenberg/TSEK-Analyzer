import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A615: MergedContextData[] = [
  {
    id: 'A615_1',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'A615_S2_1',
    [ContextFields.LABEL]: 'Test Suite based program repair',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'AUTOMATED_REPAIR',
  },
  {
    id: 'A615_S2_2',
    [ContextFields.LABEL]: 'Java Programs',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'JAVA_PROGRAMS',
  },
  {
    id: 'A615_S2_3',
    [ContextFields.LABEL]: 'Standalone Automated Program Repair Systems',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
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
