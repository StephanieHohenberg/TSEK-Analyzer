import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnalysisPaperFields, Award, GeneralPaperData, GeneralPaperFields} from '../../model/paper.data';
import {PaperService} from '../../services/paper.service';
import {AnalysisDialogComponent} from '../dialogs/analysis-dialog/analysis-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {VisibilityService} from '../../services/visibility.service';
import {FilterService} from '../../services/filter.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-paper-overview-table',
  templateUrl: './paper-overview-table.component.html',
  styleUrls: ['./paper-overview-table.component.css']
})
export class PaperOverviewTableComponent implements OnInit, OnDestroy {

  public data: GeneralPaperData[] = [];
  public amountOfFilter = 0;
  private unsubscribe$ = new Subject();


  constructor(private paperService: PaperService,
              private filterService: FilterService,
              public visibilityService: VisibilityService,
              public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.data = this.paperService.getGeneralDataOfAllPapers();
    this.filterService.getFilterUpdates$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filterUpdate => {
        this.data = this.paperService.getFilteredGeneralData(filterUpdate, this.filterService.getFilter());
        this.amountOfFilter = this.filterService.getFilter().length;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public openAnalysisDialog(): void {
    this.dialog.open(AnalysisDialogComponent, { width: '80vw' });
  }

  public getDataForLeftCol(): GeneralPaperData[] {
    if (this.showOnlyOneColumn()) {
      return this.data;
    }
    return this.data.slice(0, this.data.length / 2 + 1);
  }

  public getDataForRightCol(): GeneralPaperData[] {
    if (this.showOnlyOneColumn()) {
      return [];
    }
    return this.data.slice(this.data.length / 2 + 1, this.data.length);
  }

  public showOnlyOneColumn(): boolean {
    return !this.visibilityService.isGraphHidden() || this.data.length < 10;
  }

}
