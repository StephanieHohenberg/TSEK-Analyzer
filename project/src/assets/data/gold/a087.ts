import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A087: MergedContextData[] = [];


export const A087: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a087',
    [GeneralPaperFields.TITLE]: 'Causal Testing: Understanding Defects’ Root Causes',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.RED, Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Brittany Johnson', 'Yuriy Brun', 'Alexandra Meliou',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'University of Massachusetts Amherst' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'prototype',
    [CharacterizationFields.BENCHMARK]: 'Defects4J',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.CONTROLLED_EXPERIMENT]: true,
    [CharacterizationFields.SURVEY]: 'questionnaire after the experiment',
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A087]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new method',
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'benchmark',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [IterationGroup.C1, IterationGroup.C4],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
