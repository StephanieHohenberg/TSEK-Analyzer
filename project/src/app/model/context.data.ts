export enum ContextFields {
  ZWECK = 'zweck',
  VORKOMMEN = 'vorkommen',
  LABEL = 'label',
  PARENT = 'parent',
  SUB = 'sub',
  COLLECTING = 'collecting',
  IDENTICAL = 'identical',
  WEIGHT_FACTOR = 'weightFactor',
  HIDE = 'hide',
}

export interface ContextTableData {
  id: string;
  [ContextFields.ZWECK]?: Zweck;
  [ContextFields.VORKOMMEN]?: Vorkommen;
}

export interface ContextData {
  id: string;
  [ContextFields.LABEL]: string;
  [ContextFields.PARENT]?: string; // contextId
  [ContextFields.SUB]?: string[]; // contextId
  [ContextFields.COLLECTING]?: string[]; // contextId
  [ContextFields.ZWECK]?: Zweck; // TODO delete this later
  [ContextFields.VORKOMMEN]?: Vorkommen;
}

export interface MergedContextData {
  id: string;
  [ContextFields.ZWECK]?: Zweck;
  [ContextFields.VORKOMMEN]?: Vorkommen;
  [ContextFields.LABEL]: string;
  [ContextFields.PARENT]?: string; // contextId
  [ContextFields.SUB]?: string[]; // contextId
  [ContextFields.COLLECTING]?: string[]; // contextId
}

export enum Zweck {
  THEMA = 'THEMA',
  DETAILS = 'DETAILS',
  EINGRENZUNG = 'EINGRENZUNG',
  ABGRENZUNG = 'ABGRENZUNG',
  ANWENDUNG = 'ANWENDUNG',
  VERALLGEMEINBARKEIT = 'VERALLGEMEINBARKEIT',
  ERWEITERUNG = 'ERWEITERUNG'
}

export enum Zweck2 {
  THEMA = 0,
  DETAILS = 1,
  EINGRENZUNG = 2,
  ABGRENZUNG = 3,
  ANWENDUNG = 4,
  VERALLGEMEINBARKEIT = 6,
  ERWEITERUNG = 7
}

// TOWRITE Bereinigung der Daten, Einordnung in einer dieser Kategorien
export enum Vorkommen {
  TITEL = 'TITLE',
  ABSTRACT = 'ABSTRACT',
  INTRODUCTION = 'INTRODUCTION',
  BACKGROUND = 'BACKGROUND',
  RELATED_WORK = 'RELATED_WORK',
  DATA_PREPARATION = 'DATA_PREPARATION', // + GATHERING DATA
  RESULTS_ANALYSIS = 'RESULTS_ANALYSIS',
  EXPERIMENTAL_DESIGN = 'EXPERIMENTAL_DESIGN',
  // + STUDY DESIGN + METHODOLOGY + CASE STUDY SETUP + SUBJECT SYSTEMS + PROJECT SELECTION & DATA + SUBJECT SELECTION
  LIMITATIONS = 'LIMITATIONS',
  THREATS_TO_VALIDITY = 'THREATS_TO_VALIDITY',
  EVALUATION = 'EVALUATION',
  FUTURE_WORK = 'FUTURE_WORK',
  DISCUSSION = 'DISCUSSION',
  CONCLUSION = 'CONCLUSION',
  IMPLICITE = 'IMPLICITE',
}

export enum Vorkommen2 {
  TITEL ,
  ABSTRACT,
  INTRODUCTION ,
  BACKGROUND ,
  RELATED_WORK  ,
  DATA_PREPARATION , // + GATHERING DATA
  RESULTS_ANALYSIS,
  EXPERIMENTAL_DESIGN,
  // + STUDY DESIGN + METHODOLOGY + CASE STUDY SETUP + SUBJECT SYSTEMS + PROJECT SELECTION & DATA + SUBJECT SELECTION
  LIMITATIONS,
  THREATS_TO_VALIDITY,
  EVALUATION,
  FUTURE_WORK,
  DISCUSSION,
  CONCLUSION,
  IMPLICITE,
}
