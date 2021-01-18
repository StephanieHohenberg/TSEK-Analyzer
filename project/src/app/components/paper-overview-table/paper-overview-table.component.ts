import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnalysisPaperFields, Award, GeneralPaperData, GeneralPaperFields} from '../../data/paper.data';
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
  public readonly GENERAL_PAPER_FIELDS = GeneralPaperFields;
  public readonly AWARDS = Award;
  public readonly GENERAL_DATA_FIELD = AnalysisPaperFields.GENERAL_DATA;
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

  public displayPapersContextInGraph(paperId): void {
    console.log('TODO: implement context-graph and higlight papers contexts: ' + paperId);
  }

  public dehighlightPapersContextInGraph(paperId): void {
    console.log('TODO: implement context-graph and dehilight papers contexts: ' + paperId);
  }

  public openAnalysisDialog(): void {
    this.dialog.open(AnalysisDialogComponent, { width: '80vw' });
  }

}
