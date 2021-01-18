export enum AssumptionFields {
  ITERATION_GROUPS = 'iterationGroups',
  ASSUMPTION_GROUPS = 'assumptionGroups',
}

export interface AssumptionData {
  [AssumptionFields.ITERATION_GROUPS]: IterationGroup[];
  [AssumptionFields.ASSUMPTION_GROUPS]: AssumptionGroup[];
}

export enum IterationGroup {
  C1 = 'C1',
  C2_1 = 'C2_1',
  C2_2 = 'C2_2',
  C3 = 'C3',
  C4 = 'C4',
  C5 = 'C5',
}

export enum AssumptionGroup {
  AC1 = 'AC1',
  AC2_1 = 'AC2_1',
  AC2_2 = 'AC2_2',
  AC2_3 = 'AC2_3',
  AC3 = 'AC3',
  AC4 = 'AC4',
  IC1 = 'IC1',
  IC1_2 = 'IC1_2',
  IC2 = 'IC2',
  IC3_1 = 'IC3_1',
  IC3_2 = 'IC3_2',
  IC3_3 = 'IC3_3',
  IC4 = 'IC4',
}
