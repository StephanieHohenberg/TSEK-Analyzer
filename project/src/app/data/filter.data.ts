import {AnalysisPaperFields} from './paper.data';

export enum  FilterConnector {
  UND = '&&',
  ODER = '||'
}

export enum  FilterUpdateType {
  ADD_FILTER, DELETE_FILTER, CHANGE_CONNECTOR, RESET_FILTER
}

export class FilterData {
  filterTab: AnalysisPaperFields;
  field: string;
  value: string;
  deleteNotifier?: boolean;
  iconClass?: string;
  label?: string;
}

export class FilterUpdate {
  type: FilterUpdateType;
  connector: FilterConnector;
  data?: FilterData;
}
