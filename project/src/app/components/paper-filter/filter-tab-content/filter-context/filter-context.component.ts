import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ContextFields, Vorkommen, Zweck} from '../../../../data/context.data';
import {AnalysisPaperFields} from '../../../../data/paper.data';
import {FilterData} from '../../../../data/filter.data';

@Component({
  selector: 'app-filter-context',
  templateUrl: './filter-context.component.html',
  styleUrls: ['./filter-context.component.css']
})
export class FilterContextComponent implements OnInit {

  @Input() public filterDeletedByChip: EventEmitter<FilterData>;
  @Output() public filterChanged = new EventEmitter<FilterData>();
  public zweckList: string[] = [];
  public vorkommenList: string[] = [];
  public readonly VORKOMMEN_FIELD = ContextFields.VORKOMMEN;
  public readonly ZWECK_FIELD = ContextFields.ZWECK;
  private readonly FILTER_TAB = AnalysisPaperFields.CONTEXTS;

  constructor() { }

  public ngOnInit(): void {
    this.zweckList = Object.keys(Zweck);
    this.vorkommenList = Object.keys(Vorkommen);
  }

  public addContextFilter(value: string): void {
    if (!value || value.length === 0) { return; }
    this.filterChanged.emit({
      filterTab: this.FILTER_TAB,
      field: ContextFields.LABEL,
      value,
      label: 'Kontext: ',
    });
  }

  public changeDropdownFilter(field: string, value: string): void {
    this.filterChanged.emit({filterTab: this.FILTER_TAB, field, value, deleteNotifier: true});
  }

  public getFilterDeletedByChipEventEmitterForContext(emitter: EventEmitter<FilterData>): Observable<string> {
    return emitter.pipe(filter(f => f.filterTab === this.FILTER_TAB), map(f => f.value));
  }
}
