import {AnalysisPaperFields} from './paper.data';

export enum  FilterConnector {
  UND = '&&',
  ODER = '||'
}

export enum  FilterUpdateType {
  ADD_FILTER, DELETE_FILTER, CHANGE_FILTER_NEG_POS, CHANGE_CONNECTOR, RESET_FILTER
}

export class FilterData {
  filterTab: AnalysisPaperFields;
  field: string;
  value: string;
  deleteNotifier?: boolean;
  isNegative?: boolean;
  iconClass?: string;
  label?: string;
}

export class FilterUpdate {
  type: FilterUpdateType;
  connector: FilterConnector;
  data?: FilterData;
}
