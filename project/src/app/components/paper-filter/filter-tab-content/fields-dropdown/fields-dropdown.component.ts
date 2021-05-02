import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Continent} from '../../../../data/paper.data';

@Component({
  selector: 'app-fields-dropdown',
  templateUrl: './fields-dropdown.component.html',
  styleUrls: ['./fields-dropdown.component.css']
})
export class FieldsDropdownComponent implements OnInit, OnDestroy {

  @Input() public label = 'filter';
  @Input() public iconClass: string;
  @Input() public fieldList: string[] = [];
  @Input() public prefixTranslateKey?: string;
  @Input() public filterDeletedByChip: Observable<string>;
  @Output() public filterChanged = new EventEmitter<string>();
  public formControl = new FormControl([]);
  private unsubscribe$ = new Subject();

  constructor() { }

  public ngOnInit(): void {
    this.filterDeletedByChip
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(field => {
        // uncheck field
        if (this.formControl.value.includes(field)) {
          const selectedFields = this.formControl.value.filter(selected => selected !== field);
          this.formControl.patchValue(selectedFields);
        }
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public handleFilter(event, field: string): void {
    this.filterChanged.emit(field);
  }

  public getTranslationKeyForContinentField(field: string): string {
    return this.prefixTranslateKey ? `${this.prefixTranslateKey}.${field}` : field;
  }
}
