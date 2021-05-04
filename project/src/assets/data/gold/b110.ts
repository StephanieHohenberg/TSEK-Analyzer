import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';

export const CONTEXT_B110: MergedContextData[] = [
  {
    id: 'B110_1',
    [ContextFields.LABEL]: 'Deap Learning Systems',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'B110_S2',
    [ContextFields.LABEL]: 'DL Frameworks',
    [ContextFields.IDENTICAL]: ['B159_S1'],
    [ContextFields.SUB]: ['B110_S2_1', 'B110_S2_2', 'B110_S2_3', 'B110_S2_4'],
  },
  {
    id: 'B110_S2_1',
    [ContextFields.LABEL]: 'Tensorflow',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.IDENTICAL]: ['B159_S1_1'],
    [ContextFields.PARENT]: 'B110_S2',
  },
  {
    id: 'B110_S2_2',
    [ContextFields.LABEL]: 'Keras',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'B110_S2',
  },
  {
    id: 'B110_S2_3',
    [ContextFields.LABEL]: 'Pytorch',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.IDENTICAL]: ['B159_S1_3'],
    [ContextFields.PARENT]: 'B110_S2',
  },
  {
    id: 'B110_S2_4',
    [ContextFields.LABEL]: 'other DL frameworks',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
    [ContextFields.PARENT]: 'B110_S2',
  },
  {
    id: 'B110_S3',
    [ContextFields.LABEL]: 'DL Applications',
    [ContextFields.IDENTICAL]: ['B159_S3'],
    [ContextFields.SUB]: ['B110_S3_1', 'B110_S3_2', 'B110_S3_3', 'B110_S3_4', 'B110_S3_5', 'B110_S3_6'],
  },
  {
    id: 'B110_S3_1',
    [ContextFields.LABEL]: 'Safety-critical domains',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B110_S3',
  },
  {
    id: 'B110_S3_2',
    [ContextFields.LABEL]: 'Converting voice to text',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B110_S3',
  },
  {
    id: 'B110_S3_3',
    [ContextFields.LABEL]: 'Translating texts from one language to an other',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B110_S3',
  },
  {
    id: 'B110_S3_4',
    [ContextFields.LABEL]: 'Fraud detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B110_S3',
  },
  {
    id: 'B110_S3_5',
    [ContextFields.LABEL]: 'Diagnosis and treatment of  diseases in the medical field',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B110_S3',
  },
  {
    id: 'B110_S3_6',
    [ContextFields.LABEL]: 'Autonomous driving of vehicles',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B110_S3',
  },
];

export const B110: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b110',
    [GeneralPaperFields.TITLE]: 'Taxonomy of Real Faults in Deep Learning Systems',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Nargiz Humbatova', 'Gunel Jahangirova', 'Gabriele Bavota',
      'Vincenzo Riccio', 'Andrea Stocco', 'Paolo Tonella'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [ 'Università della Svizzera italiana' ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'manual analysis of Github artefacts',
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.STRUCTURED_INTERVIEW]: true,
    [CharacterizationFields.SURVEY]: true,
    [CharacterizationFields.DL_NN]: 'DL',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_B110]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_2]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.REFERENCE_PARTICIPANTS]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'frameworks, dataset, interview',
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C3 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
