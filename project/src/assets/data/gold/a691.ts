import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';

export const CONTEXT_A691: MergedContextData[] = [
  {
    id: 'A691_S1',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.IDENTICAL]: ['A654_S3', 'B073_S1'],
    [ContextFields.SUB]: ['A691_S1_1', 'A691_S1_2', 'A691_S1_3', 'A691_S1_4', 'A691_S1_5',
                          'A691_S1_6', 'A691_S1_7', 'A691_S1_8', 'A691_S1_9', 'A691_S1_10',
                          'A691_S1_11', 'A691_S1_12', 'A691_S1_13' ]
  },
  {
    id: 'A691_S1_1',
    [ContextFields.LABEL]: 'C#',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_2',
    [ContextFields.LABEL]: 'Python',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_3',
    [ContextFields.LABEL]: 'C++',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_4',
    [ContextFields.LABEL]: 'Julia',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_5',
    [ContextFields.LABEL]: 'PHP',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_6',
    [ContextFields.LABEL]: 'R',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_7',
    [ContextFields.LABEL]: 'TypeScript',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_8',
    [ContextFields.LABEL]: 'JavaScript',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_9',
    [ContextFields.LABEL]: 'Scala',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_10',
    [ContextFields.LABEL]: 'Rust',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_11',
    [ContextFields.LABEL]: 'Ruby',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_12',
    [ContextFields.LABEL]: 'SAS',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
  {
    id: 'A691_S1_13',
    [ContextFields.LABEL]: 'Swift',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.PARENT]: 'A691_S1',
  },
];

export const A691: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a691',
    [GeneralPaperFields.TITLE]: 'Here We Go Again: Why Is It Difficult for Developers to Learn Another Programming Language?',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: [
      'Nishal Shrestha', 'Colton Botta',
      'Titus Barik', 'Chris Parnin',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'NC State University', 'Microsoft'
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.INSPECTION]: 'Stackoverflow',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.INTERVIEW]: true,
    [CharacterizationFields.SEMI_STRUCTURED_INTERVIEW]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A691]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.SECTION_THREATS]: false,
    [GeneralizationFields.SECTION_LIMITATIONS]: true,
    [GeneralizationFields.NO_FOCUS]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C2_1 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
