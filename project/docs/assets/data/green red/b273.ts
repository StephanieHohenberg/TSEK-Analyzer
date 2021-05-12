import {
  AnalysisPaperData,
  AnalysisPaperFields,
  Award,
  Continent,
  GeneralPaperFields
} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B273: MergedContextData[] = [
  {
    id: 'B273_S1',
    [ContextFields.LABEL]: 'Differential Software Analysis',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B273_S2'],
  },
  {
    id: 'B273_S2',
    [ContextFields.LABEL]: 'Applications of Differential Software Analysis',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B273_S2_1', 'B273_S2_2', 'B273_S2_3'],
    [ContextFields.PARENT]: 'B273_S1',
  },
  {
    id: 'B273_S2_1',
    [ContextFields.LABEL]: 'Regression Bug Testing',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'B273_S2',
  },
  {
    id: 'B273_S2_2',
    [ContextFields.LABEL]: 'Side-Channel Analysis',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B273_S2',
    [ContextFields.SUB]: ['B273_S2_2_1', 'B273_S2_2_2'],
  },
  {
    id: 'B273_S2_2_1',
    [ContextFields.LABEL]: 'Memory Consumption',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B273_S2_2',
  },
  {
    id: 'B273_S2_2_2',
    [ContextFields.LABEL]: 'Execution Time',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B273_S2_2',
  },
  {
    id: 'B273_S2_3',
    [ContextFields.LABEL]: 'Adversarial Generation for Deep Neural Networks',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B273_S2',
  },
  {
    id: 'B273_S3_1',
    [ContextFields.LABEL]: 'Java ByteCode Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_2',
    [ContextFields.LABEL]: 'Neural Networks',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_3',
    [ContextFields.LABEL]: 'Traffic Collision Avoidance System',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_4',
    [ContextFields.LABEL]: 'Applications from the Defects4J Benchmark',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_5',
    [ContextFields.LABEL]: 'Time, Math, Apache CLI',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_6',
    [ContextFields.LABEL]: 'Login / Authentication Application',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_7',
    [ContextFields.LABEL]: 'Handwritten Digit Recognition Classifier',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'B273_S3_8',
    [ContextFields.LABEL]: 'other programs, other classifier, other domains',
    [ContextFields.ZWECK]: Zweck.VAGUE_VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.LIMITATIONS,
  }
];

export const B273: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b273',
    [GeneralPaperFields.TITLE]: 'HyDiff: Hybrid Differential Software Analysis',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Yannic Noller', 'Corina S. Păsăreanu', 'Marcel Böhme', 'Youcheng Sun', 'Hoang Lam Nguyen', 'Lars Grunske'],
    [GeneralPaperFields.UNIVERSITIES]: ['Humbold-Universität Berlin', 'Carnegie Mellon University Silicon Valley', 'NASA Ames Research Center', 'Monash University', 'Queens University Belfast'],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE, Continent.NORTH_AMERICA, Continent.OCEANIA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.BENCHMARK]: 'own metric',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.DL_NN]: 'DNN',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B273 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.NO_CLAIM]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
