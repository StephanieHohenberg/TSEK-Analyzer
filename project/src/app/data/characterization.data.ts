export enum CharacterizationFields {
  PROPOSAL = 'proposal',
  INSPECTION = 'inspection',
}

export const characterizationFieldList: CharacterizationFields[] = [
  CharacterizationFields.PROPOSAL,
  CharacterizationFields.INSPECTION,
];


export interface CharacterizationData {
  id: string;
  [CharacterizationFields.PROPOSAL]?: string | boolean;
  [CharacterizationFields.INSPECTION]?: string | boolean;
  // TODO missing fields
}
