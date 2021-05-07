import {ContextFields, MergedContextData} from '../../../app/data/context.data';

export const SHARED_CONTEXT: MergedContextData[] = [
  {
    id: 'ISSUES_DEFECTS_FAILURES',
    [ContextFields.LABEL]: 'Issues, Defects, Failures',
  },
  {
    id: 'SOFTWARE_ISSUES',
    [ContextFields.LABEL]: 'Software Issues',
    [ContextFields.PARENT]: 'ISSUES_DEFECTS_FAILURES',
  },
  {
    id: 'SOFTWARE_TOOLS',
    [ContextFields.LABEL]: 'Software Tools',
  },
  {
    id: 'PROGRAMMING_LANGUAGES',
    [ContextFields.LABEL]: 'Programming Languages',
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
  },
  {
    id: 'DL_FRAMEWORKS',
    [ContextFields.LABEL]: 'DL Frameworks',
    [ContextFields.PARENT]: 'DL_TOOLS',
  },
  {
    id: 'DL_PLATFORMS',
    [ContextFields.LABEL]: 'DL Platforms',
    [ContextFields.PARENT]: 'DL_TOOLS',
  },
  {
    id: 'DL_TOOLS',
    [ContextFields.LABEL]: 'DL Tools',
    [ContextFields.PARENT]: 'SOFTWARE_TOOLS',
  },
  {
    id: 'APPLICATIONS',
    [ContextFields.LABEL]: 'Applications',
  },
  {
    id: 'SYSTEMS',
    [ContextFields.LABEL]: 'Systems',
    [ContextFields.PARENT]: 'APPLICATIONS',
  },
  {
    id: 'PROGRAMS',
    [ContextFields.LABEL]: 'Programs',
    [ContextFields.PARENT]: 'APPLICATIONS',
  },
  {
    id: 'DL_APPLICATIONS',
    [ContextFields.LABEL]: 'DL Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
  },
  {
    id: 'RNN_APPLICATIONS',
    [ContextFields.LABEL]: 'RNN Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
  },
  {
    id: 'MOBILE_APPLICATIONS',
    [ContextFields.LABEL]: 'Mobile Applications',
    [ContextFields.PARENT]: 'APPLICATIONS',
  },
  {
    id: 'SE_ACTIVITIES',
    [ContextFields.LABEL]: 'SE Activities',
  },
  {
    id: 'CODE_REVIEW',
    [ContextFields.LABEL]: 'Code Review',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'SOFTWARE_DEVELOPMENT',
    [ContextFields.LABEL]: 'Software Development',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'DEV_OPS',
    [ContextFields.LABEL]: 'DevOps',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'SECURITY_A',
    [ContextFields.LABEL]: 'Security Assurance',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'BUG_HANDLING',
    [ContextFields.LABEL]: 'Bug Handling',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'BUG_DETECTION',
    [ContextFields.LABEL]: 'Bug Detection',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'DEBUGGING',
    [ContextFields.LABEL]: 'Debugging',
    [ContextFields.PARENT]: 'BUG_HANDLING',
  },
  {
    id: 'TESTING',
    [ContextFields.LABEL]: 'Testing',
    [ContextFields.PARENT]: 'SE_ACTIVITIES',
  },
  {
    id: 'TEST_TYPES',
    [ContextFields.LABEL]: 'Types of Test',
    [ContextFields.PARENT]: 'TESTING',
  },
  {
    id: 'PAPER_SPECIFIC_PROPERTIES',
    [ContextFields.LABEL]: 'Paper Specific Properties',
  },
  {
    id: 'PS_PROJECT_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Project Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',

  },
  {
    id: 'PS_PERSON_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Person Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
  },
  {
    id: 'PS_STUDY_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Person Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
  },
  {
    id: 'PS_APPLICATION_CHARACTERISTICS',
    [ContextFields.LABEL]: 'Paper Specific Application Properties',
    [ContextFields.PARENT]: 'PAPER_SPECIFIC_PROPERTIES',
  },
  {
    id: 'HUMAN_ASPECTS',
    [ContextFields.LABEL]: 'Human Aspects',
  },
  {
    id: 'COG_BIAS',
    [ContextFields.LABEL]: 'SE fields with cognitive biases',
    [ContextFields.PARENT]: 'HUMAN_ASPECTS',
  },
  {
    id: 'NEURAL_NETWORKS',
    [ContextFields.LABEL]: 'Neural Networks',
    [ContextFields.PARENT]: 'A986_S2_0',
  },
  {
    id: 'SOURCING',
    [ContextFields.LABEL]: 'Sourcing',
  },
  {
    id: 'DATA',
    [ContextFields.LABEL]: 'Data',
  },
  {
    id: 'AUTOMATED_REPAIR',
    [ContextFields.LABEL]: 'Automated Repair',
  },
  {
    id: 'NATURAL_LANGUAGES',
    [ContextFields.LABEL]: 'Automated Repair',
  },
];
