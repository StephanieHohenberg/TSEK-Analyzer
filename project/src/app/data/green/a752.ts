import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A752: MergedContextData[] = [
  {
    id: 'A752_1',
    [ContextFields.LABEL]: 'Configuration Script Defects',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
  },
  {
    id: 'A752_2',
    [ContextFields.LABEL]: 'DevOps',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
    [ContextFields.PARENT]: 'DEV_OPS',
  },
  {
    id: 'A752_S2',
    [ContextFields.LABEL]: 'IaC Tools',
    [ContextFields.SUB]: ['A752_S2_1', 'A752_S2_2', 'A752_S2_3'],
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
  },
  {
    id: 'A752_S2_1',
    [ContextFields.LABEL]: 'Puppet',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A752_S2',
  },
  {
    id: 'A752_S2_2',
    [ContextFields.LABEL]: 'Chef',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A752_S2',
  },
  {
    id: 'A752_S2_3',
    [ContextFields.LABEL]: 'CFEnginge',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'A752_S2',
  },
  {
    id: 'A752_S3',
    [ContextFields.LABEL]: 'OSS datasets with Puppet Scripts',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
];


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

