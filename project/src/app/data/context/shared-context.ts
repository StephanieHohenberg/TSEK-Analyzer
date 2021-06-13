import {ContextFields, MergedContextData} from '../../model/context.data';

export const SHARED_CONTEXT: MergedContextData[] = [
  {
    id: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.LABEL]: 'Issues, Defects, Failures',
    [ContextFields.WEIGHT_FACTOR]: 13,
  },
  {
    id: 'SOFTWARE_ISSUES',
    [ContextFields.LABEL]: 'Software Issues',
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'SOFTWARE_TOOLS',
    [ContextFields.LABEL]: 'Software Tools',
    [ContextFields.WEIGHT_FACTOR]: 14,
  },
  {
    id: 'PROGRAMMING_LANGUAGES',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.WEIGHT_FACTOR]: 15,
  },
  {
    id: 'DL_FRAMEWORKS',
    [ContextFields.LABEL]: 'DL Frameworks',
    [ContextFields.PARENT]: 'DL_TOOLS',
    [ContextFields.WEIGHT_FACTOR]: 5,
  },
  {
    id: 'DL_PLATFORMS',
    [ContextFields.LABEL]: 'DL Platforms',
    [ContextFields.PARENT]: 'DL_TOOLS',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'DL_TOOLS',
    [ContextFields.LABEL]: 'DL Tools',
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
    [ContextFields.WEIGHT_FACTOR]: 3,
  },
  {
    id: 'APPLICATIONS',
    [ContextFields.LABEL]: 'Applications',
    [ContextFields.WEIGHT_FACTOR]: 10,
  },
  {
    id: 'SYSTEMS',
    [ContextFields.LABEL]: 'Systems',
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.WEIGHT_FACTOR]: 5,
  },
  {
    id: 'PROGRAMS',
    [ContextFields.LABEL]: 'Programs',
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.WEIGHT_FACTOR]: 5,
  },
  {
    id: 'C_PROGRAMS',
    [ContextFields.LABEL]: 'C/C++ Programs',
    [ContextFields.PARENT]: 'PROGRAMS',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'DL_APPLICATIONS',
    [ContextFields.LABEL]: 'DL Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.WEIGHT_FACTOR]: 15,
  },
  {
    id: 'RNN_APPLICATIONS',
    [ContextFields.LABEL]: 'RNN Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.WEIGHT_FACTOR]: 5,
  },
  {
    id: 'MOBILE_APPLICATIONS',
    [ContextFields.LABEL]: 'Mobile Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
    [ContextFields.WEIGHT_FACTOR]: 2,
  },
  {
    id: 'SE_ACTIVITIES',
    [ContextFields.LABEL]: 'SE Activities',
    [ContextFields.WEIGHT_FACTOR]: 19,
  },
  {
    id: 'CODE_REVIEW',
    [ContextFields.LABEL]: 'Code Review',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 2,
  },
  {
    id: 'SOFTWARE_DEVELOPMENT',
    [ContextFields.LABEL]: 'Software Development',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 2,
  },
  {
    id: 'DEV_OPS',
    [ContextFields.LABEL]: 'DevOps',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'SECURITY_A',
    [ContextFields.LABEL]: 'Security Assurance',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 1,
  },
  {
    id: 'BUG_HANDLING',
    [ContextFields.LABEL]: 'Bug Handling',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 3,
  },
  {
    id: 'BUG_DETECTION',
    [ContextFields.LABEL]: 'Bug Detection',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'DEBUGGING',
    [ContextFields.LABEL]: 'Debugging',
    [ContextFields.PARENT]: 'BUG_HANDLING',
    [ContextFields.WEIGHT_FACTOR]: 11,
  },
  {
    id: 'TESTING',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
    [ContextFields.WEIGHT_FACTOR]: 32,
  },
  {
    id: 'TEST_TYPES',
    [ContextFields.LABEL]: 'Types of Test',
    [ContextFields.PARENT]: 'TESTING',
    [ContextFields.WEIGHT_FACTOR]: 8,
  },
  {
    id: 'PAPER_SPECIFIC_PROPERTIES',
    [ContextFields.LABEL]: 'Paper Specific Properties',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'PS_PROJECT_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Project Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
    [ContextFields.WEIGHT_FACTOR]: 29,

  },
  {
    id: 'PS_PERSON_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Person Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
    [ContextFields.WEIGHT_FACTOR]: 2,

  },
  {
    id: 'PS_STUDY_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Person Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
    [ContextFields.WEIGHT_FACTOR]: 3,
  },
  {
    id: 'PS_APPLICATION_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Application Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
    [ContextFields.WEIGHT_FACTOR]: 44,
  },
  {
    id: 'HUMAN_ASPECTS',
    [ContextFields.LABEL]: 'Human Aspects',
    [ContextFields.WEIGHT_FACTOR]: 6,
  },
  {
    id: 'COG_BIAS',
    [ContextFields.LABEL]: 'SE fields with cognitive biases',
    [ContextFields.PARENT]: 'HUMAN_ASPECTS',
    [ContextFields.WEIGHT_FACTOR]: 12,
  },
  {
    id: 'NEURAL_NETWORKS',
    [ContextFields.LABEL]: 'Neural Networks',
    [ContextFields.PARENT]: 'A986_S2_0',
    [ContextFields.WEIGHT_FACTOR]: 7
  },
  {
    id: 'SOURCING',
    [ContextFields.LABEL]: 'Sourcing',
    [ContextFields.WEIGHT_FACTOR]: 4,
  },
  {
    id: 'DATA',
    [ContextFields.LABEL]: 'Data',
    [ContextFields.WEIGHT_FACTOR]: 6,
  },
  {
    id: 'AUTOMATED_REPAIR',
    [ContextFields.LABEL]: 'Automated Repair',
    [ContextFields.WEIGHT_FACTOR]: 3,
  },
  {
    id: 'NATURAL_LANGUAGES',
    [ContextFields.LABEL]: 'Natural Languages',
    [ContextFields.WEIGHT_FACTOR]: 6,
  },
];
