import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';

export const CONTEXT_A309: MergedContextData[] = [
  {
    id: 'A309_S1',
    [ContextFields.LABEL]: 'Mobile Applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.IDENTICAL]: ['A322_S1', 'A481_S1'],
    [ContextFields.SUB]: ['A322_S1_1'],
  },
  {
    id: 'A309_S1_1',
    [ContextFields.LABEL]: 'Android  application',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.IDENTICAL]: ['A322_S1_1', 'A481_S1_1'],
    [ContextFields.PARENT]: 'A309_S1',
  },
  {
    id: 'A309_2',
    [ContextFields.LABEL]: 'Crowdsource Testing',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
  },
  {
    id: 'A309_3',
    [ContextFields.LABEL]: 'Responsive WebPages with mobile testing',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.IMPLICITE,
  },
  {
    id: 'A309_S4',
    [ContextFields.LABEL]: 'Types of Tests',
    [ContextFields.IDENTICAL]: ['B535_S6', 'B435_S1'],
    [ContextFields.SUB]: ['A309_S4_1', 'A309_S4_2' ],
  },
  {
    id: 'A309_S4_1',
    [ContextFields.LABEL]: 'Functional Tests',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.IDENTICAL]: ['B535_S6_1'],
    [ContextFields.PARENT]: 'A309_S4'
  },
  {
    id: 'A309_S4_2',
    [ContextFields.LABEL]: 'Usability Tests',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.IDENTICAL]: ['B535_S6_2'],
    [ContextFields.PARENT]: 'A309_S4'
  },
];

export const A309: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a309',
    [GeneralPaperFields.TITLE]: 'Translating Video Recordings of Mobile App Usages into Replayable Scenarios',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Carlos Bernal-Cárdenas', 'Nathan Cooper', 'Kevin Moran',
      'Oscar Chaparro', 'Andrian Marcus', 'Denys Poshyvanyk'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'William & Mary', 'The University of Texas at Dallas'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.CASE_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.DL_NN]: 'Tensorflow (object detection, image classification)',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A309]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.VAGUE_STATEMENT]: true,
    [GeneralizationFields.REFERENCE_EVALUATION]: 'number and diversity apps, interview',
    [GeneralizationFields.REFERENCE_SCOPE_SCALE]: 'large-scale study with 64 of the top applications',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C1, IterationGroup.C2_2, IterationGroup.C3],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
