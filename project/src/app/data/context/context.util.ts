import {ContextData, ContextFields, ContextTableData, MergedContextData} from '../../model/context.data';

export function getContextData(data: MergedContextData[]): ContextData[] {
  return [...data].map(d => ({
    id: d.id,
    [ContextFields.LABEL]: d[ContextFields.LABEL],
    [ContextFields.PARENT]: d[ContextFields.PARENT],
    [ContextFields.SUB]: d[ContextFields.SUB],
    [ContextFields.COLLECTING]: d[ContextFields.COLLECTING],
    [ContextFields.ZWECK]: d[ContextFields.ZWECK], // TODO delete this lines
    [ContextFields.VORKOMMEN]: d[ContextFields.VORKOMMEN],
  })).filter(d => d[ContextFields.LABEL] !== undefined);
}

export function getContextTableData(data: MergedContextData[]): ContextTableData[] {
  return [...data].map(d => ({
    id: d.id,
    [ContextFields.ZWECK]: d[ContextFields.ZWECK],
    [ContextFields.VORKOMMEN]: d[ContextFields.VORKOMMEN],
  })); // .filter(d => d[ContextFields.ZWECK] !== undefined && d[ContextFields.VORKOMMEN] !== undefined);
}
