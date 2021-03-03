import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../app/data/assumption.data';
import {MergedContextData} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A752: MergedContextData[] = [];


export const A752: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a752',
    [GeneralPaperFields.TITLE]: 'Gang of Eight: A Defect Taxonomy for Infrastructure as Code Scripts',
    [GeneralPaperFields.AWARDS]: [Award.GREEN],
    [GeneralPaperFields.AUTHORS]: [
      'Akond Rahman', 'Effat Farhana', 'Chris Parnin', 'Laurie Williams'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Tennessee Tech University', 'NC State University' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'tool',
    [CharacterizationFields.INSPECTION]: 'qualitative analysis of commits',
    [CharacterizationFields.COMPREHENSIVE_STUDY]: true,
    [CharacterizationFields.QUALITATIVE_ANALYSIS]: true,
    [CharacterizationFields.SURVEY]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A752]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: '+ conclusion validity',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [
      IterationGroup.C1,
    ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [
        AssumptionGroup.AC4
      ],
  }
};

