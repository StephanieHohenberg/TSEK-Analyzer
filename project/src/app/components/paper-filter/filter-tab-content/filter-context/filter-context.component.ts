import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ContextFields, Vorkommen, Zweck} from '../../../../model/context.data';
import {AnalysisPaperFields} from '../../../../model/paper.data';
import {FilterData} from '../../../../model/filter.data';
import {TranslatePipe} from '@ngx-translate/core';

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
  public PREFIX_TRANSLATE_KEY_ZWECK = 'CONTEXTS.ZWECK';
  public readonly ZWECK_FIELD = ContextFields.ZWECK;
  public  PREFIX_TRANSLATE_KEY_VORKOMMEN = 'CONTEXTS.VORKOMMEN';
  private readonly FILTER_TAB = AnalysisPaperFields.CONTEXTS;

  constructor(private translate: TranslatePipe) { }

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
      label: this.translate.transform('FILTER.CONTEXTS.CHIP.CONTEXT'),
    });
  }

  public changeDropdownFilter(field: string, value: string, prefixTranslateKey: string): void {
    this.filterChanged.emit({filterTab: this.FILTER_TAB, field, value, prefixTranslateKey, deleteNotifier: true});
  }

  public getFilterDeletedByChipEventEmitterForContext(emitter: EventEmitter<FilterData>): Observable<string> {
    return emitter.pipe(filter(f => f.filterTab === this.FILTER_TAB), map(f => f.value));
  }
}
