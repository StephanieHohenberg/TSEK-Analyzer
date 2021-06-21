import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_B435: MergedContextData[] = [
  {
    id: 'B435_S1_1',
    [ContextFields.LABEL]: 'Performance Tests',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PERFORMANCE_TESTS'
  },
  {
    id: 'B435_2',
    [ContextFields.LABEL]: 'DevOps',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'DEV_OPS',
  },
  {
    id: 'B435_S2',
    [ContextFields.LABEL]: 'Performance Issues',
    [ContextFields.PARENT]: 'SOFTWARE_ISSUES',
    [ContextFields.SUB]: ['B435_S2_1', 'B435_S2_2', 'B435_S2_3', 'B435_S2_4', 'B435_S2_5', 'B435_S2_6'],
  },
  {
    id: 'B435_S2_1',
    [ContextFields.LABEL]: 'Elapsed Time',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B435_S2'
  },
  {
    id: 'B435_S2_2',
    [ContextFields.LABEL]: 'CPU Usage',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B435_S2'
  },
  {
    id: 'B435_S2_3',
    [ContextFields.LABEL]: 'Memory Usage',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B435_S2'
  },
  {
    id: 'B435_S2_4',
    [ContextFields.LABEL]: 'I/O Read',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B435_S2'
  },
  {
    id: 'B435_S2_5',
    [ContextFields.LABEL]: 'I/O Write',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B435_S2'
  },
  {
    id: 'B435_S2_6',
    [ContextFields.LABEL]: 'Other Performance Issues',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B435_S2'
  },
  {
    id: 'B435_S3_1',
    [ContextFields.LABEL]: 'large-scale systems',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS'
  },
  {
    id: 'B435_S3_2',
    [ContextFields.LABEL]: 'distributed database management system',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS'
  },
  {
    id: 'B435_S3_3',
    [ContextFields.LABEL]: 'distributed database processing system',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS'
  },
];

export const B435: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b435',
    [GeneralPaperFields.TITLE]: 'Towards the Use of the Readily Available Tests from the Release Pipeline as Performance Tests. Are We There Yet?',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [ 'Zishuo Ding', 'Jinfu Chen', 'Weiyi Shang'],
    [GeneralPaperFields.UNIVERSITIES]: ['Concordia University, Montreal Canada'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'random forest classifiers',
    [CharacterizationFields.INSPECTION]: 'performance issues',
    [CharacterizationFields.EXPLORATORY_STUDY]: true,
    [CharacterizationFields.DL_NN]: 'random forest classifiers',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B435]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first study',
    [GeneralizationFields.REFERENCE_OTHER_STUDIES]: true,
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C1, IterationGroup.C2_2, IterationGroup.C3, IterationGroup.C4],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
