import {Injectable} from '@angular/core';
import {GeneralizationData, GeneralizationFields} from '../data/generalization.data';
import {AnalysisPaperFields, Award, Continent, GeneralPaperData, GeneralPaperFields} from '../data/paper.data';
import {CharacterizationData, CharacterizationFields} from '../data/characterization.data';
import {ContextData, ContextFields, ContextGraphData, ContextTableData, Vorkommen, Zweck} from '../data/contextGraphData';
import {AssumptionData, AssumptionFields, AssumptionGroup, IterationGroup} from '../data/assumption.data';
import {FilterConnector, FilterData, FilterUpdate, FilterUpdateType} from '../data/filter.data';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  private prevFilterResult: GeneralPaperData[] = [];
  private prevFilterDifferenzmenge: GeneralPaperData[] = [];

  constructor() { }

  public getGeneralDataOfAllPapers(): GeneralPaperData[] {
    return [this.getGeneralDataByID('fakeID'), this.getGeneralDataByID('fakeID')];
  }

  public getFilteredGeneralData(filterUpdate: FilterUpdate, filterData: FilterData[]): GeneralPaperData[] {
    let result = [];
    switch (filterUpdate.type) {
      case FilterUpdateType.RESET_FILTER: {
        result = this.getGeneralDataOfAllPapers();
        break;
      }
      case FilterUpdateType.ADD_FILTER: {
        if (filterUpdate.connector === FilterConnector.UND) {
          result = this.applyAndFilter([filterUpdate.data], this.prevFilterResult);
        } else {
          result = this.prevFilterResult.concat(this.applyOrFilter([filterUpdate.data], this.prevFilterDifferenzmenge));
        }
        break;
      }
      case FilterUpdateType.DELETE_FILTER: {
        if (filterData.length === 0) {
          return this.getGeneralDataOfAllPapers();
        }

        if (filterUpdate.connector === FilterConnector.UND) {
          result = this.prevFilterResult.concat(this.applyOrFilter(filterData, this.prevFilterDifferenzmenge));
        } else {
          result = this.applyOrFilter(filterData, this.prevFilterResult);
        }
        break;
      }
      case FilterUpdateType.CHANGE_CONNECTOR: {
        result = filterUpdate.connector === FilterConnector.UND ?
          this.applyAndFilter(filterData, this.getGeneralDataOfAllPapers()) :
          this.applyOrFilter(filterData, this.getGeneralDataOfAllPapers());
        break;
      }
    }
    this.prevFilterResult = [...result];
    this.prevFilterDifferenzmenge = []; // TODO:
    return [...result];
  }

  public getGeneralDataByID(id: string): GeneralPaperData {
    return {
      [GeneralPaperFields.ID]: 'A123',
      [GeneralPaperFields.TITLE]: 'The Art to handle Procrastination: How to enjoy the day and work in the night.',
      [GeneralPaperFields.AWARDS]: [ Award.GOLD, Award.RED],
      [GeneralPaperFields.AUTHORS]: ['Stephanie Hohenberg'],
      [GeneralPaperFields.UNIVERSITIES]: ['Free University of Berlin', 'Technische Universität Dortmund'],
      [GeneralPaperFields.CONTINENTS]: [Continent.EU],
    };
  }

  public getCharacterizationDataByID(id: string): CharacterizationData {
    return {
      id,
      [CharacterizationFields.PROPOSAL]: true,
      [CharacterizationFields.INSPECTION]: 'of my soul',
    };
  }

  public getPapersContextsByID(id: string): ContextTableData[] {
    return [
      {
        id: 'C1',
        [ContextFields.ZWECK]: Zweck.THEMA,
        [ContextFields.VORKOMMEN]: Vorkommen.TITEL,
      },
      {
        id: 'C2',
        [ContextFields.ZWECK]: Zweck.ANWENDUNG,
        [ContextFields.VORKOMMEN]: Vorkommen.ABSTRACT,
      },
      {
        id: 'C3',
        [ContextFields.ZWECK]: Zweck.VERALLGEMEINBARKEIT,
        [ContextFields.VORKOMMEN]: Vorkommen.THREATS_TO_VALIDITY,
      },
    ];
  }

  public getContextDataById(id: string): ContextGraphData {
    return {
        id,
        [ContextFields.LABEL]: 'Fake Kontext',
        [ContextFields.PARENT]: undefined,
        [ContextFields.SUB]: undefined,
      };
  }

  public getGeneralizationDataByID(id: string): GeneralizationData {
    return {
      id,
      [GeneralizationFields.AUFTEILUNG_3]: true,
      [GeneralizationFields.AUFTEILUNG_2]: false,
      [GeneralizationFields.AUFTEILUNG_1]: false,
    };
  }

  public getAssumptionDataByID(id: string): AssumptionData {
    return {
      id,
      [AssumptionFields.ITERATION_GROUPS]: [IterationGroup.C1, IterationGroup.C4],
      [AssumptionFields.ASSUMPTION_GROUPS]: [AssumptionGroup.AC1, AssumptionGroup.IC2, AssumptionGroup.IC3_3],
    };
  }

  private applyAndFilter(filterData: FilterData[], generalPaperData: GeneralPaperData[]): GeneralPaperData[] {
    const result = this.filterGeneralPaperDataByAndFilter(filterData, [...generalPaperData]);
    let resultIDs = result.map(p => p.id);
    resultIDs = this.filterPaperDataByAndFilter(filterData, AnalysisPaperFields.CHARACTERIZATION, [...this.getCharacterizationDataByIDs(resultIDs)]);
    resultIDs = this.filterPaperDataByAndFilter(filterData, AnalysisPaperFields.GENERALIZATION, [...this.getGeneralizationDataByIDs(resultIDs)]);
    resultIDs = this.filterPaperDataByAndFilter(filterData, AnalysisPaperFields.ASSUMPTIONS, [...this.getAssumptionDataByIDs(resultIDs)]);
    resultIDs = this.filterContextPaperDataByAndFilter(filterData, [...this.getContextDataByIDs(resultIDs)]);
    return result.filter(p => resultIDs.includes(p.id));
  }

  private applyOrFilter(filterData: FilterData[], generalPaperData: GeneralPaperData[]): GeneralPaperData[] {
    const result = this.filterGeneralPaperDataByOrFilter(filterData, [...generalPaperData]);
    let resultIDs = result.map(p => p.id);
    resultIDs = resultIDs.concat(this.filterPaperDataByOrFilter(filterData, AnalysisPaperFields.CHARACTERIZATION, [...this.getCharacterizationDataOfAllPapers()]));
    resultIDs = resultIDs.concat(this.filterPaperDataByOrFilter(filterData, AnalysisPaperFields.GENERALIZATION, [...this.getGeneralizationDataOfAllPapers()]));
    resultIDs = resultIDs.concat(this.filterPaperDataByOrFilter(filterData, AnalysisPaperFields.ASSUMPTIONS, [...this.getAssumptionDataOfAllPapers()]));
    resultIDs = resultIDs.concat(this.filterContextPaperDataByOrFilter(filterData, [...this.getContextDataOfAllPapers()]));
    return result.filter(p => resultIDs.includes(p.id));
  }

  // tslint:disable-next-line:max-line-length
  private filterPaperDataByOrFilter(filterData: FilterData[], analysisPaperField: AnalysisPaperFields, paperData: CharacterizationData[] | GeneralizationData[] | AssumptionData[]): string[] {
      const filterFields = filterData.filter(f => f.filterTab === analysisPaperField);
      if (filterFields.length === 0) {
        return [];
      }
      // @ts-ignore
      return paperData.filter(paper => {
        filterFields.forEach(f => {
          return paper[f.field] === true || (paper[f.field] && paper[f.field].length > 0);
        });
      }).map(p => p.id);
  }

  // tslint:disable-next-line:max-line-length
  private filterPaperDataByAndFilter(filterData: FilterData[], analysisPaperField: AnalysisPaperFields, paperData: CharacterizationData[] | GeneralizationData[] | AssumptionData[]): string[] {
      const filterFields = filterData.filter(f => f.filterTab === analysisPaperField);
      if (filterFields.length === 0) {
        // @ts-ignore
        return paperData.map(p => p.id);
      }

      // @ts-ignore
      return paperData.filter(paper => {
        filterFields.forEach(f => {
          if (!(paper[f.field] === true || (paper[f.field] && paper[f.field].length > 0))) {
            return false;
          }
        });
        return true;
      }).map(p => p.id);
  }

  private filterGeneralPaperDataByOrFilter(filterData: FilterData[], paperData: GeneralPaperData[]): GeneralPaperData[] {
    const filterFields = filterData.filter(f => f.filterTab === AnalysisPaperFields.GENERAL_DATA);
    if (filterFields.length === 0) {
      return [];
    }

    return paperData.filter(paper => {
      filterFields.forEach(f => {
        return paper[f.field].includes(f.value);
      });
    });
  }

  private filterGeneralPaperDataByAndFilter(filterData: FilterData[], paperData: GeneralPaperData[]): GeneralPaperData[] {
    const filterFields = filterData.filter(f => f.filterTab === AnalysisPaperFields.GENERAL_DATA);
    if (filterFields.length === 0) {
      return paperData;
    }

    return paperData.filter(paper => {
      filterFields.forEach(f => {
        if (!paper[f.field].includes(f.value)) {
          return false;
        }
      });
      return true;
    });
  }

  private filterContextPaperDataByOrFilter(filterData: FilterData[], paperData: ContextData[]): string[] {
    const filterFields = filterData.filter(f => f.filterTab === AnalysisPaperFields.CONTEXTS && f.field);
    if (filterFields.length === 0) {
      return [];
    }

    return paperData.filter(paper => {
      filterFields.forEach(f => {
        return paper.contexts.filter(context => {
          if (f.field === ContextFields.LABEL) {
            const contextLabel = this.getContextDataById(context.id);
            if (context[f.field] === contextLabel) {
              return true;
            }
          } else if (context[f.field] === (f.value)) {
            return true;
          }
        }).length === filterFields.length;
      });
      return true;
    }).map(p => p.paperId);
  }

  private filterContextPaperDataByAndFilter(filterData: FilterData[], paperData: ContextData[]): string[] {
    const filterFields = filterData.filter(f => f.filterTab === AnalysisPaperFields.CONTEXTS && f.field);
    if (filterFields.length === 0) {
      return paperData.map(p => p.paperId);
    }

    return paperData.filter(paper => {
      filterFields.forEach(f => {
        return paper.contexts.findIndex(context => {
          if (f.field === ContextFields.LABEL) {
            const contextLabel = this.getContextDataById(context.id);
            if (context[f.field] === contextLabel) {
              return true;
            }
          } else if (context[f.field] === (f.value)) {
            return true;
          }
        }) > -1;
      });
      return true;
    }).map(p => p.paperId);
  }


  private getCharacterizationDataOfAllPapers(): CharacterizationData[] {
      return [];
    }

    private getContextDataOfAllPapers(): ContextData[] {
      return [];
    }

    private getGeneralizationDataOfAllPapers(): GeneralizationData[] {
      return [];
    }

    private getAssumptionDataOfAllPapers(): AssumptionData[] {
      return [];
    }

    private getCharacterizationDataByIDs(IDs: string[]): CharacterizationData[] {
      return [];
    }

    private getContextDataByIDs(IDs: string[]): ContextData[] {
      return [];
    }

    private getGeneralizationDataByIDs(IDs: string[]): GeneralizationData[] {
      return [];
    }

    private getAssumptionDataByIDs(IDs: string[]): AssumptionData[] {
      return [];
    }
}
