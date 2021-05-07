export enum ContextFields {
  ZWECK = 'zweck',
  VORKOMMEN = 'vorkommen',
  LABEL = 'label',
  PARENT = 'parent',
  SUB = 'sub',
  IDENTICAL = 'identical',
}

export interface ContextTableData {
  id: string;
  [ContextFields.ZWECK]: Zweck;
  [ContextFields.VORKOMMEN]: Vorkommen;
}

export interface ContextData {
  id: string;
  [ContextFields.LABEL]: string;
  [ContextFields.PARENT]?: string; // contextId
  [ContextFields.SUB]?: string[]; // contextId
}

export interface MergedContextData {
  id: string;
  [ContextFields.ZWECK]?: Zweck;
  [ContextFields.VORKOMMEN]?: Vorkommen;
  [ContextFields.LABEL]: string;
  [ContextFields.PARENT]?: string; // contextId
  [ContextFields.SUB]?: string[]; // contextId
  [ContextFields.IDENTICAL]?: string[]; // contextId
}

export enum Zweck {
  THEMA = 'THEMA',
  DETAILS = 'DETAILS',
  EINGRENZUNG = 'EINGRENZUNG',
  ABGRENZUNG = 'ABGRENZUNG',
  ANWENDUNG = 'ANWENDUNG',
  VAGUE_VERALLGEMEINBARKEIT = 'VAGUE_VERALLGEMEINBARKEIT',
  VERALLGEMEINBARKEIT = 'VERALLGEMEINBARKEIT',
  ERWEITERUNG = 'ERWEITERUNG'
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
  EXPERIMENTAL_DESIGN = 'EXPERIMENTAL_DESIGN', // + STUDY DESIGN + METHODOLOGY + CASE STUDY SETUP + SUBJECT SYSTEMS + PROJECT SELECTION & DATA + SUBJECT SELECTION
  LIMITATIONS = 'LIMITATIONS',
  THREATS_TO_VALIDITY = 'THREATS_TO_VALIDITY',
  EVALUATION = 'EVALUATION',
  FUTURE_WORK = 'FUTURE_WORK',
  DISCUSSION = 'DISCUSSION',
  CONCLUSION = 'CONCLUSION',
  IMPLICITE = 'IMPLICITE',
}
