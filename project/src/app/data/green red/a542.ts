import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A542: MergedContextData[] = [
  {
    id: 'A542_1',
    [ContextFields.LABEL]: 'Security',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'SECURITY_A',
  },
  {
    id: 'A542_S2_1',
    [ContextFields.LABEL]: 'Solidity',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'SOLIDITY',
  },
  {
    id: 'A542_S2_2',
    [ContextFields.LABEL]: 'Ethereum',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'ETHEREUM',
  },
  {
    id: 'A542_S3',
    [ContextFields.LABEL]: 'Blockchain Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.SUB]: ['A542_S3_1', 'A542_S3_2', 'A542_S3_3', 'A542_S3_4']
  },
  {
    id: 'A542_S3_1',
    [ContextFields.LABEL]: 'Crypto Currency',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A542_S3',
  },
  {
    id: 'A542_S3_2',
    [ContextFields.LABEL]: 'Games',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A542_S3',
  },
  {
    id: 'A542_S3_3',
    [ContextFields.LABEL]: 'Financial Services',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A542_S3',
  },
  {
    id: 'A542_S3_4',
    [ContextFields.LABEL]: 'Security-Critical Applications',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'A542_S3',
  },
];

export const A542 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a542',
    [GeneralPaperFields.TITLE]: 'Gap between Theory and Practice : An Empirical Study of Security Patches in Solidity',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Sungjae Hwang', 'Sukyoung Ryu'],
    [GeneralPaperFields.UNIVERSITIES]: ['KAIST'],
    [GeneralPaperFields.CONTINENTS]: [Continent.ASIA],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A542 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
