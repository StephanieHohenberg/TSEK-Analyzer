import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A493: MergedContextData[] = [
  {
    id: 'A493_1',
    [ContextFields.LABEL]: 'Refactoring',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'A666_S2',
    [ContextFields.LABEL]: 'heteregonous computing with field-programmable gate-arrays',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
    [ContextFields.SUB]: ['A666_S2_1'],
  },
  {
    id: 'A666_S2_1',
    [ContextFields.LABEL]: 'systems with more than one kind of core / processor',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
    [ContextFields.PARENT]: 'A666_S2',
  },
  {
    id: 'A666_S3',
    [ContextFields.LABEL]: 'C/C++ programs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'PROGRAMS',
    [ContextFields.SUB]: ['A666_S3_1', 'A666_S3_2', 'A666_S3_3', 'A666_S3_4'],
  },
  {
    id: 'A666_S3_1',
    [ContextFields.LABEL]: 'recursive programs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S3',
  },
  {
    id: 'A666_S3_2',
    [ContextFields.LABEL]: 'integer intensive programs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S3',
  },
  {
    id: 'A666_S3_3',
    [ContextFields.LABEL]: 'floating-point intensive programs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S3',
  },
  {
    id: 'A666_S3_4',
    [ContextFields.LABEL]: 'computer vision / image processing programs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S3',
  },
  {
    id: 'A666_S4',
    [ContextFields.LABEL]: 'purposes of refactorings',
    [ContextFields.PARENT]: 'A493_1',
    [ContextFields.SUB]: ['A666_S4_1', 'A666_S4_2', 'A666_S4_3', 'A666_S4_4'],
  },
  {
    id: 'A666_S4_1',
    [ContextFields.LABEL]: 'program transformation',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S4',
  },
  {
    id: 'A666_S4_2',
    [ContextFields.LABEL]: 'high level synthesis (HLS)',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S4',
  },
  {
    id: 'A666_S4_3',
    [ContextFields.LABEL]: 'software maintenance',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A666_S4',
  },
  {
    id: 'A666_S4_4',
    [ContextFields.LABEL]: 'performance improvement',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A666_S4',
  },
  {
    id: 'A666_S5',
    [ContextFields.LABEL]: 'HLS tools',
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.SUB]: ['A666_S5_1', 'A666_S5_2', 'A666_S5_3', 'A666_S5_4'],
  },
  {
    id: 'A666_S5_1',
    [ContextFields.LABEL]: 'Xilinx',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A666_S5',
  },
  {
    id: 'A666_S5_2',
    [ContextFields.LABEL]: 'Intels HLS Compiler',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A666_S5',
  },
  {
    id: 'A666_S5_3',
    [ContextFields.LABEL]: 'Catapult HLS from Mentor',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A666_S5',
  },
  {
    id: 'A666_S5_4',
    [ContextFields.LABEL]: 'CyberWorkBench from NEC',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.PARENT]: 'A666_S5',
  },
];


export const A493: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a493',
    [GeneralPaperFields.TITLE]: 'HeteroRefactor: Refactoring for Heterogeneous Computing with FPGA',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Jason Lau', 'Aishwarya Sivaraman', 'Qian Zhang',
      'Muhammad Ali Gulzar', 'Jason Cong', 'Miryung Kim',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of California, Los Angeles' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'technique',
    [CharacterizationFields.BENCHMARK]: 'Rosetta benchmark',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to manual optimized programs',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A493]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new analysis',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C5,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC2_2,
      ],
  }
};

