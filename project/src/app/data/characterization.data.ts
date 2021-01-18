export enum CharacterizationFields {
  PROPOSAL = 'PROPOSAL',
  INSPECTION = 'INSPECTION',
  EMPIRICAL_STUDY = 'EMPIRICAL_STUDY',
  COMPREHENSIVE_STUDY = 'COMPREHENSIVE_STUDY',
  PILOT_STUDY = 'PILOT_STUDY',
  FIELD_STUDY = 'FIELD_STUDY',
  EXPLORATORY_STUDY = 'EXPLORATORY_STUDY',
  CASE_STUDY = 'CASE_STUDY',
  USER_STUDY = 'USER_STUDY',
  EVALUATION = 'EVALUATION',
  BENCHMARK = 'BENCHMARK',
  EXPERIMENT = 'EXPERIMENT',
  CONTROLLED_EXPERIMENT = 'CONTROLLED_EXPERIMENT',
  PSYCHOLOGICAL_EXPERIMENT = 'PSYCHOLOGICAL_EXPERIMENT',
  ONLINE_EXPERIMENT = 'ONLINE_EXPERIMEN',
  SIMULATION = 'SIMULATION',
  INTERVIEW = 'INTERVIEW',
  SEMI_STRUCTURED_INTERVIEW = 'SEMI_STRUCTURED_INTERVIEW',
  STRUCTURED_INTERVIEW = 'STRUCTURED_INTERVIEW',
  SURVEY = 'SURVEY',
  CONTEXTUAL_INQUIRY = 'CONTEXTUAL_INQUIRY',
  STATES_OF_ARTS = 'STATES_OF_ARTS',
  DL_NN = 'DL_NN',
  TESTING = 'TESTING',
  HUMAN_ASPECTS = 'HUMAN_ASPECTS',
  QUALITATIVE_ANALYSIS = 'QUALITATIVE_ANALYSIS',
  APPLICATION_TARGET = 'APPLICATION_TARGET',
}

export const characterizationFieldList: CharacterizationFields[] = [
  CharacterizationFields.PROPOSAL,
  CharacterizationFields.INSPECTION,
  CharacterizationFields.EMPIRICAL_STUDY,
  CharacterizationFields.COMPREHENSIVE_STUDY,
  CharacterizationFields.PILOT_STUDY,
  CharacterizationFields.FIELD_STUDY,
  CharacterizationFields.EXPLORATORY_STUDY,
  CharacterizationFields.CASE_STUDY,
  CharacterizationFields.USER_STUDY,
  CharacterizationFields.EVALUATION,
  CharacterizationFields.BENCHMARK,
  CharacterizationFields.EXPERIMENT,
  CharacterizationFields.CONTROLLED_EXPERIMENT,
  CharacterizationFields.PSYCHOLOGICAL_EXPERIMENT,
  CharacterizationFields.ONLINE_EXPERIMENT,
  CharacterizationFields.SIMULATION,
  CharacterizationFields.INTERVIEW,
  CharacterizationFields.SEMI_STRUCTURED_INTERVIEW,
  CharacterizationFields.STRUCTURED_INTERVIEW,
  CharacterizationFields.SURVEY,
  CharacterizationFields.CONTEXTUAL_INQUIRY,
  CharacterizationFields.STATES_OF_ARTS,
  CharacterizationFields.DL_NN,
  CharacterizationFields.TESTING,
  CharacterizationFields.HUMAN_ASPECTS,
  CharacterizationFields.QUALITATIVE_ANALYSIS,
  CharacterizationFields.APPLICATION_TARGET,
];


export interface CharacterizationData {
  [CharacterizationFields.PROPOSAL]?: string | boolean;
  [CharacterizationFields.INSPECTION]?: string | boolean;
  [CharacterizationFields.EMPIRICAL_STUDY]?: string | boolean;
  [CharacterizationFields.COMPREHENSIVE_STUDY]?: string | boolean;
  [CharacterizationFields.PILOT_STUDY]?: string | boolean;
  [CharacterizationFields.FIELD_STUDY]?: string | boolean;
  [CharacterizationFields.EXPLORATORY_STUDY]?: string | boolean;
  [CharacterizationFields.CASE_STUDY]?: string | boolean;
  [CharacterizationFields.USER_STUDY]?: string | boolean;
  [CharacterizationFields.EVALUATION]?: string | boolean;
  [CharacterizationFields.BENCHMARK]?: string | boolean;
  [CharacterizationFields.EXPERIMENT]?: string | boolean;
  [CharacterizationFields.CONTROLLED_EXPERIMENT]?: string | boolean;
  [CharacterizationFields.PSYCHOLOGICAL_EXPERIMENT]?: string | boolean;
  [CharacterizationFields.ONLINE_EXPERIMENT]?: string | boolean;
  [CharacterizationFields.SIMULATION]?: string | boolean;
  [CharacterizationFields.INTERVIEW]?: string | boolean;
  [CharacterizationFields.SEMI_STRUCTURED_INTERVIEW]?: string | boolean;
  [CharacterizationFields.STRUCTURED_INTERVIEW]?: string | boolean;
  [CharacterizationFields.SURVEY]?: string | boolean;
  [CharacterizationFields.CONTEXTUAL_INQUIRY]?: string | boolean;
  [CharacterizationFields.STATES_OF_ARTS]?: string | boolean;
  [CharacterizationFields.DL_NN]?: string | boolean;
  [CharacterizationFields.TESTING]?: string | boolean;
  [CharacterizationFields.HUMAN_ASPECTS]?: string | boolean;
  [CharacterizationFields.QUALITATIVE_ANALYSIS]?: string | boolean;
  [CharacterizationFields.APPLICATION_TARGET]?: string | boolean;
}
