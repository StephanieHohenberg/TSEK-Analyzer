import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A493: MergedContextData[] = [];


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

