import {Injectable} from '@angular/core';
import {GeneralizationData} from '../model/generalization.data';
import {AnalysisPaperData, AnalysisPaperFields, GeneralPaperData} from '../model/paper.data';
import {CharacterizationData} from '../model/characterization.data';
import {ContextData, ContextFields, ContextTableData} from '../model/context.data';
import {AssumptionData} from '../model/assumption.data';
import {FilterConnector, FilterData, FilterUpdate, FilterUpdateType} from '../model/filter.data';
import {getDataMap} from '../data/hashmap.data';
import {getContextMap} from '../data/context/context';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  private paperMap: Map<string, AnalysisPaperData>;
  private contextMap: Map<string, ContextData>;
  private paperList: AnalysisPaperData[] = [];
  private generalDataList: GeneralPaperData[] = [];

  constructor() {
    this.paperMap = getDataMap();
    for (const paper of this.paperMap.values()) {
      this.paperList.push({...paper});
      this.generalDataList.push({...paper[AnalysisPaperFields.GENERAL_DATA]});
    }
    this.contextMap = getContextMap();
  }

  public getGeneralDataOfAllPapers(): GeneralPaperData[] {
    return this.generalDataList;
  }

  public getFilteredGeneralData(filterUpdate: FilterUpdate, filterData: FilterData[]): GeneralPaperData[] {
    if (filterUpdate.type === FilterUpdateType.RESET_FILTER) {
      return this.generalDataList;
    }

    if (filterUpdate.connector === FilterConnector.UND) {
      return this.applyAndFilter(filterData);
    } else {
      return this.applyOrFilter(filterData);
    }
  }

  public getGeneralDataByID(id: string): GeneralPaperData {
    return this.paperMap.get(id)[AnalysisPaperFields.GENERAL_DATA];
  }

  public getCharacterizationDataByID(id: string): CharacterizationData {
    return this.paperMap.get(id)[AnalysisPaperFields.CHARACTERIZATION];
  }

  public getPapersContextsByID(id: string): ContextTableData[] {
    return this.paperMap.get(id)[AnalysisPaperFields.CONTEXTS];
  }

  public getContextDataById(id: string): ContextData {
    const context = this.contextMap.get(id);
    return context ? context : this.getDefaultContext(id);
  }

  public getGeneralizationDataByID(id: string): GeneralizationData {
    return this.paperMap.get(id)[AnalysisPaperFields.GENERALIZATION];
  }

  public getAssumptionDataByID(id: string): AssumptionData {
    return this.paperMap.get(id)[AnalysisPaperFields.ASSUMPTIONS];
  }

  private applyAndFilter(filterData: FilterData[]): GeneralPaperData[] {
    const result = this.paperList.filter(p => {
      for (const f of filterData) {
        const data = p[f.filterTab];
        if (f.filterTab !== AnalysisPaperFields.CONTEXTS) {
          if (!f.isNegative && !this.hasFilteredValueForField(f.filterTab, f.field, f.value, data[f.field])) {
            return false;
          } else if (f.isNegative && !this.hasNotFilteredValueForField(f.filterTab, f.field, f.value, data[f.field])) {
            return false;
          }
        } else if (!f.isNegative && !this.hasContextWithFilterCriteria(data, f.field, f.value)) {
          return false;
        } else if (f.isNegative && !this.hasNotContextWithFilterCriteria(data, f.field, f.value)) {
          return false;
        }
      }
      return true;
    });
    return result.map(p => p[AnalysisPaperFields.GENERAL_DATA]);
  }

  private applyOrFilter(filterData: FilterData[]): GeneralPaperData[] {
    const result = this.paperList.filter(p => {
      for (const f of filterData) {
        const data = p[f.filterTab];
        if (f.filterTab !== AnalysisPaperFields.CONTEXTS) {
          if (f.isNegative && this.hasNotFilteredValueForField(f.filterTab, f.field, f.value, data[f.field])) {
            return true;
          } else if (!f.isNegative && this.hasFilteredValueForField(f.filterTab, f.field, f.value, data[f.field])) {
            return true;
          }
        } else if (f.isNegative && this.hasNotContextWithFilterCriteria(data, f.field, f.value)) {
          return true;
        } else if (!f.isNegative && this.hasContextWithFilterCriteria(data, f.field, f.value)) {
          return true;
        }
      }
      return false;
    });
    return result.map(p => p[AnalysisPaperFields.GENERAL_DATA]);
  }


  private hasFilteredValueForField(tab: AnalysisPaperFields, field: string, expectedValue: any, value: any): boolean {
    if (Array.isArray(value)) {
      return value.findIndex(entry => entry.toLowerCase().includes(expectedValue.toLowerCase())) > -1;
    }

    if (tab === AnalysisPaperFields.GENERALIZATION || tab === AnalysisPaperFields.CHARACTERIZATION) {
      return value;
    }

    if (tab === AnalysisPaperFields.GENERAL_DATA) {
      return value.toLowerCase().includes(expectedValue.toLowerCase());
    }

    if (tab === AnalysisPaperFields.ASSUMPTIONS) {
      return value.includes(expectedValue);
    }

    return false;
  }

  private hasNotFilteredValueForField(tab: AnalysisPaperFields, field: string, expectedValue: any, value: any): boolean {
    if (Array.isArray(value)) {
      return value.findIndex(entry => entry.toLowerCase().includes(expectedValue.toLowerCase())) === -1;
    }

    if (tab === AnalysisPaperFields.GENERALIZATION || tab === AnalysisPaperFields.CHARACTERIZATION) {
      return !value;
    }

    if (tab === AnalysisPaperFields.GENERAL_DATA) {
      return !value.toLowerCase().includes(expectedValue.toLowerCase());
    }

    if (tab === AnalysisPaperFields.ASSUMPTIONS) {
      return !value.includes(expectedValue);
    }

    return true;
  }

  private hasContextWithFilterCriteria(data, field: string, expectedValue: any): boolean {
    if (field !== ContextFields.LABEL) {
      return data.findIndex(context => context[field] === expectedValue) > -1;
    } else {
      return data.findIndex(context => {
        const label = this.getContextDataById(context.id)[field];
        return label.toLowerCase().includes(expectedValue.toLowerCase());
      }) > -1;
    }
  }

  private hasNotContextWithFilterCriteria(data, field: string, expectedValue: any): boolean {
    if (field !== ContextFields.LABEL) {
      return data.findIndex(context => context[field] === expectedValue) === -1;
    } else {
      return data.findIndex(context => {
        const label = this.getContextDataById(context.id)[field];
        return label.toLowerCase().includes(expectedValue.toLowerCase());
      }) === -1;
    }
  }

  private getDefaultContext(id: string): ContextData {
    return {
      id,
      [ContextFields.LABEL]: 'Fake Kontext',
      [ContextFields.PARENT]: undefined,
      [ContextFields.SUB]: undefined,
    };
  }
}
