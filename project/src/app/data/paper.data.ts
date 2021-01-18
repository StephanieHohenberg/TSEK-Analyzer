import {AssumptionData} from './assumption.data';
import {GeneralizationData} from './generalization.data';
import {ContextData, ContextTableData} from './context.data';
import {CharacterizationData} from './characterization.data';

export enum AnalysisPaperFields {
  GENERAL_DATA = 'generalData',
  CHARACTERIZATION = 'characterization',
  CONTEXTS = 'contexts',
  GENERALIZATION = 'generalization',
  ASSUMPTIONS = 'assumptions',
}

export const analysisPaperFieldList: AnalysisPaperFields[] = [
  AnalysisPaperFields.GENERAL_DATA,
  AnalysisPaperFields.CHARACTERIZATION,
  AnalysisPaperFields.CONTEXTS,
  AnalysisPaperFields.GENERALIZATION,
  AnalysisPaperFields.ASSUMPTIONS,
];

export interface AnalysisPaperData {
  [AnalysisPaperFields.GENERAL_DATA]: GeneralPaperData;
  [AnalysisPaperFields.CHARACTERIZATION]: CharacterizationData;
  [AnalysisPaperFields.CONTEXTS]: ContextTableData[];
  [AnalysisPaperFields.GENERALIZATION]: GeneralizationData;
  [AnalysisPaperFields.ASSUMPTIONS]: AssumptionData;
}

export enum GeneralPaperFields {
  ID = 'id',
  TITLE = 'title',
  AWARDS = 'awards',
  AUTHORS = 'authors',
  UNIVERSITIES = 'universities',
  CONTINENTS = 'continents',
}

export const generalPaperFieldList: GeneralPaperFields[] = [
  GeneralPaperFields.TITLE,
  GeneralPaperFields.AWARDS,
  GeneralPaperFields.AUTHORS,
  GeneralPaperFields.UNIVERSITIES,
  GeneralPaperFields.CONTINENTS,
];

export const generalPaperArrayTypeFieldList: GeneralPaperFields[] = [
  GeneralPaperFields.AWARDS,
  GeneralPaperFields.UNIVERSITIES,
  GeneralPaperFields.CONTINENTS,
];

export interface GeneralPaperData {
  [GeneralPaperFields.ID]: string;
  [GeneralPaperFields.TITLE]: string;
  [GeneralPaperFields.AWARDS]: Award[];
  [GeneralPaperFields.AUTHORS]: string[];
  [GeneralPaperFields.UNIVERSITIES]: string[];
  [GeneralPaperFields.CONTINENTS]: Continent[];
}

export enum Award {
  GOLD = 'GOLD',
  GREEN = 'GREEN',
  RED = 'RED',
}

export enum Continent {
  EUROPE = 'EUROPE',
  ASIA= 'ASIA',
  NORTH_AMERICA= 'NORTH_AMERICA',
  CENTRAL_AMERICA= 'CENTRAL_AMERICA',
  SOUTH_AMERICA= 'SOUTH_AMERICA',
  AFRICA= 'AFRICA',
  OCEANIA= 'OCEANIA',
}
