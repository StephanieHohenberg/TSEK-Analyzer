import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AnalysisPaperFields, Award, Continent, GeneralPaperFields} from '../../../../data/paper.data';
import {VisibilityService} from '../../../../services/visibility.service';
import {FilterData} from '../../../../data/filter.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-filter-general',
  templateUrl: './filter-general.component.html',
  styleUrls: ['./filter-general.component.css']
})
export class FilterGeneralComponent implements OnInit {

  @Input() filterDeletedByChip: EventEmitter<FilterData>;
  @Output() filterChanged = new EventEmitter<FilterData>();
  public continentList: string[] = [];
  public readonly CONTINENT_ICON_CLASS = 'fas fa-globe';
  public readonly FILTER_TAB = AnalysisPaperFields.GENERAL_DATA;
  public readonly AWARDS = Award;
  private unsubscribe$ = new Subject();

  constructor(private snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute,
              public visibilityService: VisibilityService) { }

  public ngOnInit(): void {
    this.continentList = Object.keys(Continent);

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        if (params.id) {
          this.addIdFilter(params.id);
        }
      });
  }

  public addIdFilter(value: string): void {
    if (!value) { return; }
    if (value.length !== 4) {
      this.snackBar.open('Gib die ID einer Publikation im XXXX-Format an.', '', {
        duration: 2000,
      });
      return;
    }
    this.filterChanged.emit({ filterTab: this.FILTER_TAB, field: GeneralPaperFields.ID, value, label: 'ID: '});
  }

  public addTitleFilter(value: string): void {
    if (!value || value.length === 0) { return; }
    this.filterChanged.emit({ filterTab: this.FILTER_TAB, field: GeneralPaperFields.TITLE, value, label: 'Titel: '});
  }

  public addAuthorFilter(value: string): void {
    if (!value || value.length === 0) { return; }
    const filterLabel = `Author/in: ${value}`;
    // tslint:disable-next-line:max-line-length
    this.filterChanged.emit({
      filterTab: this.FILTER_TAB,
      field: GeneralPaperFields.AUTHORS,
      value,
      label: 'Author/in: ',
      iconClass: 'fas fa-users'
    });
  }

  public addUniversityFilter(value: string): void {
    if (!value || value.length === 0) { return; }
    this.filterChanged.emit({
      filterTab: this.FILTER_TAB,
      field: GeneralPaperFields.UNIVERSITIES,
      value,
      label: 'Universität: ',
      iconClass: 'fas fa-university'
    });
  }

  public changeContinentDropdownFilter(value: string): void {
    // tslint:disable-next-line:max-line-length
    this.filterChanged.emit({
      filterTab: this.FILTER_TAB, value, field: GeneralPaperFields.CONTINENTS, deleteNotifier: true, iconClass: this.CONTINENT_ICON_CLASS});
  }

  public addAwardFilter(award: Award, iconClass: string): void {
    this.filterChanged.emit({ filterTab: this.FILTER_TAB, field: GeneralPaperFields.AWARDS, value: award, iconClass });
  }

  public getFilterDeletedByChipEventEmitterForGeneralData(emitter: EventEmitter<FilterData>): Observable<string> {
    return emitter.pipe(filter(f => f.filterTab === this.FILTER_TAB), map(f => f.value));
  }

}
