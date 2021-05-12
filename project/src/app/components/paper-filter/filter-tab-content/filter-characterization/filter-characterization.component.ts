import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {AnalysisPaperFields} from '../../../../model/paper.data';
import {CharacterizationFields} from '../../../../model/characterization.data';
import {FilterData} from '../../../../model/filter.data';

@Component({
  selector: 'app-filter-characterization',
  templateUrl: './filter-characterization.component.html',
  styleUrls: ['./filter-characterization.component.css']
})
export class FilterCharacterizationComponent implements OnInit {

  @Input() filterDeletedByChip: EventEmitter<FilterData>;
  @Output() filterChanged = new EventEmitter<FilterData>();
  public fieldList: string[] = [];
  public readonly PREFIX_TRANSLATE_KEY = 'CHARACTERIZATION.LABELS';
  private readonly FILTER_TAB = AnalysisPaperFields.CHARACTERIZATION;

  constructor() { }

  public ngOnInit(): void {
    this.fieldList = Object.keys(CharacterizationFields);
  }

  public changeDropdownFilter(value: string): void {
    this.filterChanged.emit(
      {filterTab: this.FILTER_TAB, field: value, value, prefixTranslateKey: this.PREFIX_TRANSLATE_KEY, deleteNotifier: true});
  }

  public getFilterDeletedByChipEventEmitterForCharacterization(emitter: EventEmitter<FilterData>): Observable<string> {
    return emitter.pipe(filter(f => f.filterTab === this.FILTER_TAB), map(f => f.value));
  }

}
