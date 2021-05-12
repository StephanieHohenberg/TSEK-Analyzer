import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {AnalysisPaperFields} from '../../../../model/paper.data';
import {GeneralizationFields} from '../../../../model/generalization.data';
import {FilterData} from '../../../../model/filter.data';

@Component({
  selector: 'app-filter-verallgemeinbarkeit',
  templateUrl: './filter-verallgemeinbarkeit.component.html',
  styleUrls: ['./filter-verallgemeinbarkeit.component.css']
})
export class FilterVerallgemeinbarkeitComponent implements OnInit {

  @Input() filterDeletedByChip: EventEmitter<FilterData>;
  @Output() filterChanged = new EventEmitter<FilterData>();
  public fieldList: string[] = [];
  public readonly PREFIX_TRANSLATE_KEY = 'GENERALIZATION.LABELS';
  private readonly FILTER_TAB = AnalysisPaperFields.GENERALIZATION;


  constructor() { }

  ngOnInit(): void {
    this.fieldList = Object.keys(GeneralizationFields);
  }

  public changeDropdownFilter(value: string): void {
    this.filterChanged.emit(
      {filterTab: this.FILTER_TAB, field: value, value, prefixTranslateKey: this.PREFIX_TRANSLATE_KEY, deleteNotifier: true});
  }

  public getFilterDeletedByChipEventEmitterForGeneralization(emitter: EventEmitter<FilterData>): Observable<string> {
    return emitter.pipe(filter(f => f.filterTab === this.FILTER_TAB), map(f => f.value));
  }

}
