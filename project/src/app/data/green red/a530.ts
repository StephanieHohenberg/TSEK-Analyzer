import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A530: MergedContextData[] = [
  {
    id: 'A530_S1_1',
    [ContextFields.LABEL]: 'Ethereum Smart Contracts',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'ETHEREUM',
  },
  {
    id: 'A530_S1_2',
    [ContextFields.LABEL]: 'Solidity',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'SOLIDITY',
  },
  {
    id: 'A530_S2',
    [ContextFields.LABEL]: 'Automated Analysis Tool',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A824_S4',
    [ContextFields.SUB]: ['A530_S2_1', 'A530_S2_2']
  },
  {
    id: 'A530_S2_1',
    [ContextFields.LABEL]: 'Identification of Vulnerabilities',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S2',
  },
  {
    id: 'A530_S2_1',
    [ContextFields.LABEL]: 'Construction of Artifacts',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S2',
  },

  {
    id: 'A530_S3',
    [ContextFields.LABEL]: 'Blockchain Contract Vulnerabilities',
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.SUB]: ['A530_S2_1', 'A530_S2_2', 'A530_S2_3', 'A530_S2_4', 'A530_S2_5', 'A530_S2_6', 'A530_S2_7', 'A530_S2_8']
  },
  {
    id: 'A530_S3_1',
    [ContextFields.LABEL]: 'Access Control',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_3',
    [ContextFields.LABEL]: 'Arithmetic',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_3',
    [ContextFields.LABEL]: 'Denial of Service',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_4',
    [ContextFields.LABEL]: 'Front Running',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_5',
    [ContextFields.LABEL]: 'Reentrancy',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_6',
    [ContextFields.LABEL]: 'Time Manipulation',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_7',
    [ContextFields.LABEL]: 'Unchecked Calls',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
  {
    id: 'A530_S3_8',
    [ContextFields.LABEL]: 'Unknown Unknowns',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A530_S3',
  },
];

export const A530 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a530',
    [GeneralPaperFields.TITLE]: 'Empirical Review of Automated Analysis Tools on 47,587 Ethereum Smart Contracts',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Thomas Durieux', 'João F. Ferreira', 'Rui Abreu', 'Pedro Cruz'],
    [GeneralPaperFields.UNIVERSITIES]: ['NESC-ID and IST, University of Lisbon'],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'framework',
    [CharacterizationFields.EMPIRICAL_STUDY]: 'empirical review',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A530 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel framework',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'set of smart contracts',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
