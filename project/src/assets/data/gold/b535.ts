import {AnalysisPaperData, AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../app/data/paper.data';
import {CharacterizationFields} from '../../../app/data/characterization.data';
import {GeneralizationFields} from '../../../app/data/generalization.data';
import {AssumptionFields, IterationGroup} from '../../../app/data/assumption.data';

export const B535: AnalysisPaperData = {
  [AnalysisPaperFields.GENERAL_DATA]: {
    [GeneralPaperFields.ID]: 'b535',
    [GeneralPaperFields.TITLE]: 'Context-aware In-process Crowdworker Recommendation',
    [GeneralPaperFields.AWARDS]: [Award.GOLD],
    [GeneralPaperFields.AUTHORS]: ['Junjie Wang', 'Ye Yang', 'Song Wang', 'Yuanzhe Hu', 'Dandan Wang', 'Qing Wang'],
    [GeneralPaperFields.UNIVERSITIES]: [
      'University of Chinese Academy of Sciences, Beijing, China',
      'School of Systems and Enterprises, Stevens Institute of Technology, USA',
      'Lassonde School of Engineering, York University, Canada',
    ],
    [GeneralPaperFields.CONTINENTS]: [ Continent.ASIA, Continent.NORTH_AMERICA ],
  },
  [AnalysisPaperFields.CHARACTERIZATION]: {
    [CharacterizationFields.PROPOSAL]: 'approach',
    [CharacterizationFields.PILOT_STUDY]: true,
    [CharacterizationFields.EVALUATION]: true,
    [CharacterizationFields.TESTING]: true,
  },
  [AnalysisPaperFields.CONTEXTS]: [],
  [AnalysisPaperFields.GENERALIZATION]: {
    [GeneralizationFields.AUFTEILUNG_3]: 'implizit',
    [GeneralizationFields.SECTION_THREATS]: true,
    [GeneralizationFields.SECTION_FUTURE_WORK]: true,
    [GeneralizationFields.REFERENCE_PROCEDURE]: true,
  },
  [AnalysisPaperFields.ASSUMPTIONS]: {
    [AssumptionFields.ITERATION_GROUPS]: [ IterationGroup.C1 ],
    [AssumptionFields.ASSUMPTION_GROUPS]: [],
  }
};
