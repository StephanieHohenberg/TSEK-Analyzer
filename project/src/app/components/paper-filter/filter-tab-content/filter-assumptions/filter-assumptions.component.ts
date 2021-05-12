import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AssumptionFields, AssumptionGroup, IterationGroup} from '../../../../model/assumption.data';
import {AnalysisPaperFields} from '../../../../model/paper.data';
import {FilterData} from '../../../../model/filter.data';

@Component({
  selector: 'app-filter-assumptions',
  templateUrl: './filter-assumptions.component.html',
  styleUrls: ['./filter-assumptions.component.css']
})
export class FilterAssumptionsComponent implements OnInit {

  @Input() filterDeletedByChip: EventEmitter<FilterData>;
  @Output() filterChanged = new EventEmitter<FilterData>();
  public iterationGroupList: string[] = [];
  public assumptionGroupList: string[] = [];
  public readonly ITERATION_GROUPS_FIELD = AssumptionFields.ITERATION_GROUPS;
  public readonly ASSUMPTION_GROUPS_FIELD = AssumptionFields.ASSUMPTION_GROUPS;
  private readonly FILTER_TAB = AnalysisPaperFields.ASSUMPTIONS;


  constructor() { }

  ngOnInit(): void {
    this.iterationGroupList = Object.keys(IterationGroup);
    this.assumptionGroupList = Object.keys(AssumptionGroup);
    this.filterDeletedByChip.pipe(map(f => f.value));
  }

  public changeDropdownFilter(field: string, value: string): void {
    this.filterChanged.emit({filterTab: this.FILTER_TAB, field, value, deleteNotifier: true});
  }

  public getFilterDeletedByChipEventEmitterForAssumption(emitter: EventEmitter<FilterData>): Observable<string> {
    return emitter.pipe(filter(f => f.filterTab === this.FILTER_TAB), map(f => f.value));
  }

}
