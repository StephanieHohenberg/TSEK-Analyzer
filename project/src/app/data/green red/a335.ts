import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A335: MergedContextData[] = [
  {
    id: 'A335_S1',
    [ContextFields.LABEL]: 'Bug Detection',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['A335_S1_1'],
    [ContextFields.PARENT]: 'BUG_HANDLING',
  },
  {
    id: 'A335_S1_1',
    [ContextFields.LABEL]: 'Compiler Bugs',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A335_S1',
  },
  {
    id: 'A335_S2_1',
    [ContextFields.LABEL]: 'commercial cyber-physical system development tools (CPS) / model-based design tools',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.SUB]: ['A335_S2_1_1', 'A335_S2_1_2'],
  },
  {
    id: 'A335_S2_1_1',
    [ContextFields.LABEL]: 'MathWorks Simulink',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.PARENT]: 'A335_S2_1',
  },
  {
    id: 'A335_S2_1_2',
    [ContextFields.LABEL]: 'MathLab',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EVALUATION,
    [ContextFields.PARENT]: 'A335_S2_1',
  },
  {
    id: 'A335_S2_2',
    [ContextFields.LABEL]: 'safety-critical application',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A335_S2_3',
    [ContextFields.LABEL]: 'subset of the Simulink language and libraries',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A335_S2_4',
    [ContextFields.LABEL]: 'commercial CPS tool chain',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A335_S2_5',
    [ContextFields.LABEL]: 'other libraries, user-created models and other CPS tools',
    [ContextFields.ZWECK]: Zweck.ERWEITERUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
];

export const A335 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a335',
    [GeneralPaperFields.TITLE]: 'SLEMI: Equivalence Modulo Input (EMI) Based Mutation of CPS Models for Finding Compiler Bugs in Simulink',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Shafiul Azam Chowdhury', 'Sohil Lal Shrestha', 'Taylor T. Johnson', 'Christoph Csallner'],
    [GeneralPaperFields.UNIVERSITIES]: ['University of Texas at Arlington', 'Vanderbilt University Nashville'],
    [GeneralPaperFields.CONTINENTS]: [Continent.NORTH_AMERICA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'mutation techniques',
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to an other technique',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A335 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.NO_CLAIM]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'models',
    [GeneralizationFields.REFERENCE_IMPLEMENTATION]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
