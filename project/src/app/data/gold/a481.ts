import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../model/paper.data';
import {CharacterizationFields} from '../../model/characterization.data';
import {GeneralizationFields} from '../../model/generalization.data';
import {AssumptionFields, IterationGroup} from '../../model/assumption.data';
import {getContextTableData} from '../context/context.util';
import {ContextFields, MergedContextData, Vorkommen, Zweck} from '../../model/context.data';

export const CONTEXT_A481: MergedContextData[] = [
  {
    id: 'A481_S1_1',
    [ContextFields.LABEL]: 'Android Applications',
    [ContextFields.ZWECK]: Zweck.EINGRENZUNG,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
    [ContextFields.PARENT]: 'ANDROID_APPLICATIONS',
  },
  {
    id: 'A481_2',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.ZWECK]: Zweck.THEMA,
    [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
  },
  {
    id: 'A481_S3_1',
    [ContextFields.LABEL]: 'large, industrial applications',
    [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
    [ContextFields.VORKOMMEN]: Vorkommen.CONCLUSION,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A481_S3_2',
    [ContextFields.LABEL]: 'open source',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
  {
    id: 'A481_S3_3',
    [ContextFields.LABEL]: 'closed source',
    [ContextFields.ZWECK]: Zweck.DETAILS,
    [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
    [ContextFields.PARENT]: 'PS_APPLICATION_CHARACTERISTICS',
  },
];

export const A481: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'a481',
    [GeneralPaperFields.TITLE]: 'Time-travel Testing of Android Apps',
    [GeneralPaperFields.AWARDS]: [Award.GOLD, Award.GREEN, Award.RED],
    [GeneralPaperFields.AUTHORS]: [
      'Zhen Dong', 'Marcel Böhme', 'Lucia Cojocaru', 'Abhik Roychoudhury'
    ],
    [GeneralPaperFields.UNIVERSITIES]: [
      'National University of Singapore', 'Monash University, Australia', 'Politehnica University of Bucharest'
    ],
    [GeneralPaperFields.CONTINENTS]: [
      Continent.ASIA, Continent.OCEANIA, Continent.EUROPE,
    ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.BENCHMARK]: 'AndroTest',
    [CharacterizationFields.EXPERIMENT]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: getContextTableData([...CONTEXT_A481]),
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_1]: true,
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.CLAIM_FIRST_APPROACH]: 'novel approach',
},
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C4 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
