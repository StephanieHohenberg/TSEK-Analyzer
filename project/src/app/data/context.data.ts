export enum ContextFields {
  ZWECK = 'zweck',
  VORKOMMEN = 'vorkommen',
  LABEL = 'label',
  PARENT = 'parent',
  SUB = 'sub',
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

export enum Vorkommen {
  TITEL = 'TITEL',
  ABSTRACT = 'ABSTRACT',
  INTRODUCTION = 'INTRODUCTION',
  // TODO mas
  LIMITATIONS = 'LIMITATIONS',
  THREATS_TO_VALIDITY = 'THREATS_TO_VALIDITY',
  FUTURE_WORK = 'FUTURE_WORK',
  DISCUSSION = 'DISCUSSION',
  CONCLUSION = 'CONCLUSION',
}
