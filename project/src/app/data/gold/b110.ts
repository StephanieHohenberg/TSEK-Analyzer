import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_B110: MergedContextData[] = [
  {
    id: 'B110_1',
    [ContextFields.LABEL]: 'Deap Learning Systems',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'SYSTEMS',
  },
  {
    id: 'B110_S2_1',
    [ContextFields.LABEL]: 'Tensorflow',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'TENSORFLOW',
  },
  {
    id: 'B110_S2_2',
    [ContextFields.LABEL]: 'Keras',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'KERAS',
  },
  {
    id: 'B110_S2_3',
    [ContextFields.LABEL]: 'Pytorch',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PYTORCH',
  },
  {
    id: 'B110_S2_4',
    [ContextFields.LABEL]: 'other DL frameworks',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
  },
  {
    id: 'B110_S3_1',
    [ContextFields.LABEL]: 'Safety-critical domains',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B110_S3_2',
    [ContextFields.LABEL]: 'Converting voice to text',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B110_S3_3',
    [ContextFields.LABEL]: 'Translating texts from one language to an other',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B110_S3_4',
    [ContextFields.LABEL]: 'Fraud detection',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B110_S3_5',
    [ContextFields.LABEL]: 'Diagnosis and treatment of  diseases in the medical field',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
  },
  {
    id: 'B110_S3_6',
    [ContextFields.LABEL]: 'Autonomous driving of vehicles',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'DL_APPLICATIONS',
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
