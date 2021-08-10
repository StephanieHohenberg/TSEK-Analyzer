export enum GeneralizationFields {
  AUFTEILUNG_3 = 'AUFTEILUNG_3',
  AUFTEILUNG_2 = 'AUFTEILUNG_2',
  AUFTEILUNG_1 = 'AUFTEILUNG_1',
  SECTION_THREATS = 'SECTION_THREATS',
  SECTION_LIMITATIONS = 'SECTION_LIMITATIONS',
  SECTION_FUTURE_WORK = 'SECTION_FUTURE_WORK',
  NO_FOCUS = 'NO_FOCUS',
  NO_CLAIM = 'NO_CLAIM',
  CLAIM_FIRST_APPROACH = 'CLAIM_FIRST_APPROACH',
  REFERENCE_PARTICIPANTS = 'REFERENCE_PARTICIPANTS',
  REFERENCE_EVALUATION = 'REFERENCE_EVALUATION',
  REFERENCE_OTHER_STUDIES = 'REFERENCE_OTHER_STUDIES',
  REFERENCE_SCOPE_SCALE = 'REFERENCE_SCOPE_SCALE',
  REFERENCE_PROCEDURE = 'REFERENCE_PROCEDURE',
  REFERENCE_IMPLEMENTATION = 'REFERENCE_IMPLEMENTATION',
}
export const generalizationFieldList: GeneralizationFields[] = [
  GeneralizationFields.AUFTEILUNG_3,
  GeneralizationFields.AUFTEILUNG_2,
  GeneralizationFields.AUFTEILUNG_1,
  GeneralizationFields.SECTION_THREATS,
  GeneralizationFields.SECTION_LIMITATIONS,
  GeneralizationFields.SECTION_FUTURE_WORK,
  GeneralizationFields.NO_FOCUS,
  GeneralizationFields.CLAIM_FIRST_APPROACH,
  GeneralizationFields.REFERENCE_PARTICIPANTS,
  GeneralizationFields.REFERENCE_EVALUATION,
  GeneralizationFields.REFERENCE_OTHER_STUDIES,
  GeneralizationFields.REFERENCE_SCOPE_SCALE,
  GeneralizationFields.REFERENCE_PROCEDURE,
  GeneralizationFields.REFERENCE_IMPLEMENTATION,
];

export interface GeneralizationData {
  [GeneralizationFields.AUFTEILUNG_3]?: string | boolean;
  [GeneralizationFields.AUFTEILUNG_2]?: string | boolean;
  [GeneralizationFields.AUFTEILUNG_1]?: string | boolean;
  [GeneralizationFields.SECTION_THREATS]?: string | boolean;
  [GeneralizationFields.SECTION_LIMITATIONS]?: string | boolean;
  [GeneralizationFields.SECTION_FUTURE_WORK]?: string | boolean;
  [GeneralizationFields.NO_FOCUS]?: string | boolean;
  [GeneralizationFields.NO_CLAIM]?: string | boolean;
  [GeneralizationFields.CLAIM_FIRST_APPROACH]?: string | boolean;
  [GeneralizationFields.REFERENCE_PARTICIPANTS]?: string | boolean;
  [GeneralizationFields.REFERENCE_EVALUATION]?: string | boolean;
  [GeneralizationFields.REFERENCE_OTHER_STUDIES]?: string | boolean;
  [GeneralizationFields.REFERENCE_SCOPE_SCALE]?: string | boolean;
  [GeneralizationFields.REFERENCE_PROCEDURE]?: string | boolean;
  [GeneralizationFields.REFERENCE_IMPLEMENTATION]?: string | boolean;
}
