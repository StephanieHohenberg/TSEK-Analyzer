import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {analysisPaperFieldList} from '../../model/paper.data';
import {VisibilityService} from '../../services/visibility.service';
import {FilterService} from '../../services/filter.service';
import {FilterConnector, FilterData} from '../../model/filter.data';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-paper-filter',
  templateUrl: './paper-filter.component.html',
  styleUrls: ['./paper-filter.component.css']
})
export class PaperFilterComponent implements OnInit, OnDestroy {

  public chipDeleted: EventEmitter<FilterData> = new EventEmitter<FilterData>();
  public chipList: FilterData[] = [];
  public analysisPaperFields = analysisPaperFieldList;
  public filterConnector: FilterConnector;
  private unsubscribe$ = new Subject();

  constructor(public filterService: FilterService,
              public visibilityService: VisibilityService,
              private translate: TranslatePipe) { }

  public ngOnInit(): void {
    this.filterService.getFilter$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filter => {
        this.chipList = filter;
      });
    this.filterConnector = this.filterService.getFilterConnector();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public deleteFilterByChip(filter: FilterData): void {
    if (!filter.deleteNotifier) {
      this.filterService.removeFilter(filter);
    }
    this.chipDeleted.emit(filter);
  }

  public deleteAllChips(): void {
    this.chipList.forEach(c => { this.chipDeleted.emit(c); });
    this.filterService.resetFilter();
  }

  public handleFilterChangeByTabContent(filter: FilterData): void {
    if (this.hasDeselectedFilterInDropdown(filter)) {
      this.filterService.removeFilter(filter);
    } else {
      this.filterService.addFilter(filter);
    }
  }

  public toggleFilterConnector(): void {
    this.filterService.toggleFilterConnector();
    this.filterConnector = this.filterService.getFilterConnector();
  }

  public toggleFilterPosNeg(filter: FilterData): void {
    this.filterService.toggleFilterPosNeg(filter);
  }

  private hasDeselectedFilterInDropdown(filter: FilterData): boolean {
    return this.chipList.findIndex(c => c.filterTab === filter.filterTab && c.field === filter.field && c.value === filter.value) > -1;
  }

  public getLabelForFilterTab(tab: string): string {
    return this.translate.transform(`FILTER.${tab}.TAB_TITLE`);
  }

  public getTranslatedFilterValue(filter: FilterData): string {
    return filter.prefixTranslateKey ? this.translate.transform(`${filter.prefixTranslateKey}.${filter.value}`) : filter.value;
  }

}
