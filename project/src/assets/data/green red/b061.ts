import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';
import {ContextFields, Dimension, MergedContextData, Vorkommen, Zweck} from '../../../app/data/context.data';
import {getContextTableData} from '../context/context.util';

export const CONTEXT_B061: MergedContextData[] = [
  {
    id: 'B061_S1',
    [ContextFields.LABEL]: 'mobile operation system',
    [ContextFields.SUB]: ['B061_S1_1'],
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
  },
  {
    id: 'B061_S1_1',
    [ContextFields.LABEL]: 'Android applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'B061_S1',
    [ContextFields.SUB]: ['B061_S1_1_1', 'B061_S1_1_2', 'B061_S1_1_3', 'B061_S1_1_4', 'B061_S1_1_5'],
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
  },
  {
    id: 'B061_S2',
    [ContextFields.LABEL]: 'Taint Analysis',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.SUB]: ['B061_S2_1', 'B061_S2_2', 'B061_S2_3', 'B061_S2_4'],
  },
  {
    id: 'B061_S2_1',
    [ContextFields.LABEL]: 'identify sensitive information leaks',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
    [ContextFields.PARENT]: 'B061_S2',
  },
  {
    id: 'B061_S2_2',
    [ContextFields.LABEL]: 'detect security related bugs',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
    [ContextFields.PARENT]: 'B061_S2',
  },
  {
    id: 'B061_S2_3',
    [ContextFields.LABEL]: 'static',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B061_S2',
  },
  {
    id: 'B061_S2_4',
    [ContextFields.LABEL]: 'dynamic',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.INTRODUCTION,
    [ContextFields.PARENT]: 'B061_S2',
  },
  {
    id: 'B061_S1_1_1',
    [ContextFields.LABEL]: 'real-world applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'B061_S1_1',
  },
  {
    id: 'B061_S1_1_2',
    [ContextFields.LABEL]: 'top Android applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.RELATED_WORK,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'B061_S1_1',
  },
  {
    id: 'B061_S1_1_3',
    [ContextFields.LABEL]: 'large applications with hard to analyse code',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'B061_S1_1',
  },
  {
    id: 'B061_S1_1_4',
    [ContextFields.LABEL]: 'debuggable and installable apps',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.EXPERIMENTAL_DESIGN,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'B061_S1_1',
  },
  {
    id: 'B061_S1_1_5',
    [ContextFields.LABEL]: 'applications with write operations',
    [ContextFields.ZWECK]: Zweck.ANWENDUNG,
    [ContextFields.DIMENSION]: Dimension.APPLICATION,
    [ContextFields.PARENT]: 'B061_S1_1',
  },
  {
    id: 'B061_S3',
    [ContextFields.LABEL]: 'debugging',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
    [ContextFields.SUB]: ['B061_S3_1'],
  },
  {
    id: 'B061_S3_1',
    [ContextFields.LABEL]: 'finding memory leaks',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.BACKGROUND,
    [ContextFields.DIMENSION]: Dimension.SE_ACTIVITY,
    [ContextFields.PARENT]: 'B061_S3',
  },
];

export const B061 = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b061',
    [GeneralPaperFields.TITLE]: 'Heaps’n Leaks: How Heap Snapshots Improve Android Taint Analysis',
    [GeneralPaperFields.AWARDS]: [ Award.GREEN, Award.RED ],
    [GeneralPaperFields.AUTHORS]: [
      'Manuel Benz', 'Erik Krogh Kristensen', 'Linghui Luo',
      'Nataniel P. Borges Jr.', 'Eric Bodden', 'Andreas Zeller',
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'Paderborn University', 'Aarhus University', 'CISPA Helmholtz Center for Information Security', 'Frauenhofer IEM',
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.EUROPE ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'prototype, extension of a tool',
    [CharacterizationFields.INSPECTION]: 'manually exploration of the apps used in the experiment',
    [CharacterizationFields.EMPIRICAL_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.BENCHMARK]: 'own created: DroidMacroBench',
    [CharacterizationFields.EXPERIMENT]: 'reproduction of prior paper\'s experiments',
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([ ...CONTEXT_B061 ]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: 'Limitations',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'new novel approach',
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C5 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};