import {Injectable} from '@angular/core';
import {FilterConnector, FilterData, FilterUpdate, FilterUpdateType} from '../data/filter.data';
import {BehaviorSubject, Observable} from 'rxjs';

export const DEFAULT_FILTER: FilterUpdate = { type: FilterUpdateType.RESET_FILTER, connector: FilterConnector.UND};


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter$ = new BehaviorSubject<FilterData[]>([]);
  private filterUpdates$ = new BehaviorSubject<FilterUpdate>(DEFAULT_FILTER);

  constructor() { }

  public addFilter(data: FilterData): void {
    this.filter$.next([...this.filter$.value, data]);
    this.filterUpdates$.next({type: FilterUpdateType.ADD_FILTER, data, connector: this.filterUpdates$.value.connector });
    // TODO sort by colors, types

  }

  public removeFilter(data: FilterData): void {
    const newFilter = this.filter$.value.filter(
      c => c.filterTab !== data.filterTab || c.field !== data.field  || c.value !== data.value);
    this.filter$.next(newFilter);
    this.filterUpdates$.next({type: FilterUpdateType.DELETE_FILTER, data, connector: this.filterUpdates$.value.connector });
  }

  public resetFilter(): void {
    this.filter$.next([]);
    this.filterUpdates$.next({type: FilterUpdateType.RESET_FILTER, connector: this.filterUpdates$.value.connector });
  }

  public getFilter$(): Observable<FilterData[]> {
    return this.filter$.asObservable();
  }

  public getFilter(): FilterData[] {
    return this.filter$.value;
  }

  public getFilterUpdates$(): Observable<FilterUpdate> {
    return this.filterUpdates$.asObservable();
  }

  public toggleFilterConnector(): void {
    const newConnector =  this.filterUpdates$.value.connector === FilterConnector.UND ? FilterConnector.ODER : FilterConnector.UND;
    this.filterUpdates$.next({type: FilterUpdateType.CHANGE_CONNECTOR, connector: this.filterUpdates$.value.connector });
  }

  public getFilterConnector(): FilterConnector {
    return this.filterUpdates$.value.connector;
  }

}