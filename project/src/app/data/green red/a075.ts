import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields} from '../../model/assumption.data';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_A075: MergedContextData[] = [
  {
    id: 'A075_1',
    [ContextFields.LABEL]: 'Automated Data Repair and Debugging', // TODO
    [ContextFields.PARENT]: 'AUTOMATED_REPAIR',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A075_S2',
    [ContextFields.LABEL]: 'Data Corruption',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'DATA',
    [ContextFields.SUB]: ['A075_2_1', 'A075_2_2', 'A075_2_3', 'A075_2_4', 'A075_2_5', 'A075_2_6', 'A075_2_7', 'A075_2_8'],
  },
  {
    id: 'A075_S2_1',
    [ContextFields.LABEL]: 'Document Recovery',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_2',
    [ContextFields.LABEL]: 'Input Retification',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_3',
    [ContextFields.LABEL]: 'Input Debuging',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_4',
    [ContextFields.LABEL]: 'Data Diversitry',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_5',
    [ContextFields.LABEL]: 'Data Structure Repair',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_6',
    [ContextFields.LABEL]: 'Syntactic Error Recovery',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_7',
    [ContextFields.LABEL]: 'Data Cleaning and Repair',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S2_8',
    [ContextFields.LABEL]: 'Data Testing and Debugging',
    [ContextFields.ZWECK]: Zweck.ABGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.PARENT]: 'A075_S2',
  },
  {
    id: 'A075_S3',
    [ContextFields.LABEL]: 'Input Format',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'DATA',
    [ContextFields.SUB]: ['A075_S3_1', 'A075_S3_2'],
  },
  {
    id: 'A075_S3_1',
    [ContextFields.LABEL]: 'Wave. OBJ and DOT (graphic domain)',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S3',
  },
  {
    id: 'A075_S3_2',
    [ContextFields.LABEL]: 'JSON (data exchange domain)',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S3',
  },
  {
    id: 'A075_S4',
    [ContextFields.LABEL]: 'Programs',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.SUB]: ['A075_S4_1', 'A075_S4_2', 'A075_S4_3'],
  },
  {
    id: 'A075_S4_1',
    [ContextFields.LABEL]: 'C',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S4',
  },
  {
    id: 'A075_S4_2',
    [ContextFields.LABEL]: 'C++',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S4',
  },
  {
    id: 'A075_S4_3',
    [ContextFields.LABEL]: 'Java',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S4',
  },
  {
    id: 'A075_S5',
    [ContextFields.LABEL]: 'Grammar',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.SUB]: ['A075_S5_1', 'A075_S5_2'],
  },
  {
    id: 'A075_S5_1',
    [ContextFields.LABEL]: 'Antlr grammar',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S5',
  },
  {
    id: 'A075_S5_2',
    [ContextFields.LABEL]: 'Wavefront Obj grammar',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A075_S5',
  },
];

export const A075 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a075',
    [GeneralPaperFields.TITLE]: 'Debugging Inputs',
    [GeneralPaperFields.AWARDS]: [Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: ['Lukas Kirschner', 'Ezekiel Soremekun', 'Andreas Zeller'],
    [GeneralPaperFields.UNIVERSITIES]: ['CISPA - Helmholtz Center for Information Security'],
    [GeneralPaperFields.CONTINENTS]: [Continent.EUROPE],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'algorithm',
    [CharacterizationFields.INSPECTION]: 'crawling github input files',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.STATES_OF_ARTS]: 'compared to other tools',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_A075 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'first approach',
    [GeneralizationFields.REFERENCE_EVALUATION]: 'used programs and input size',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
