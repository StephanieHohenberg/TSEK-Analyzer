export enum GeneralizationFields {
  AUFTEILUNG_3 = 'aufteilung3',
  AUFTEILUNG_2 = 'aufteilung2',
  AUFTEILUNG_1 = 'aufteilung1',
}
export const generalizationFieldList: GeneralizationFields[] = [
  GeneralizationFields.AUFTEILUNG_3,
  GeneralizationFields.AUFTEILUNG_2,
  GeneralizationFields.AUFTEILUNG_1,
];

export interface GeneralizationData {
  id: string;
  [GeneralizationFields.AUFTEILUNG_3]: string | boolean;
  [GeneralizationFields.AUFTEILUNG_2]: string | boolean;
  [GeneralizationFields.AUFTEILUNG_1]: string | boolean;
  // TODO missing fields
}
