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
  EU = 'EU',
  ASIA= 'ASIA',
}
