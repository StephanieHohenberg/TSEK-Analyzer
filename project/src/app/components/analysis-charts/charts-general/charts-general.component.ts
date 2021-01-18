import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../../services/filter.service';
import {takeUntil} from 'rxjs/operators';
import {PaperService} from '../../../services/paper.service';
import {Subject} from 'rxjs';
import {Award, Continent, GeneralPaperData, GeneralPaperFields} from '../../../data/paper.data';

@Component({
  selector: 'app-charts-general',
  templateUrl: './charts-general.component.html',
  styleUrls: ['./charts-general.component.css']
})
export class ChartsGeneralComponent implements OnInit, OnDestroy {

  public awardData: any[];
  public continentData: any[];
  public awardView: any[] = [600, 400];
  public continentView: any[] = [500, 400];
  public awardColorScheme = {domain: [ 'black', 'darkgreen', 'gold', 'green', 'darkred', 'lightgrey']};
  public continentColorScheme = {domain: [ 'blue', 'yellow', 'palevioletred', 'darkred', 'indianred', 'black', 'green']};
  private unsubscribe$ = new Subject();

  constructor(private filterService: FilterService,
              private paperService: PaperService) { }

  public ngOnInit(): void {
    this.fillChartData(this.paperService.getGeneralDataOfAllPapers());
    this.filterService.getFilterUpdates$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filterUpdate => {
        const papers = this.paperService.getFilteredGeneralData(filterUpdate, this.filterService.getFilter());
        this.fillChartData(papers);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private fillChartData(papers: GeneralPaperData[]): void {
    this.awardData = [
      { name: '3 Awards', value: papers.filter(p => p[GeneralPaperFields.AWARDS].length === 3).length },
      { name: '2 Badges', value: papers.filter(p => p[GeneralPaperFields.AWARDS].length === 2).length },
      { name: 'ACM Award: Distinguished Paper / Artefact', value: papers.filter(p => p[GeneralPaperFields.AWARDS].length === 1 && p[GeneralPaperFields.AWARDS][0] === Award.GOLD).length },
      { name: 'Badge: Artifacts Available', value: papers.filter(p => p[GeneralPaperFields.AWARDS].length === 1 && p[GeneralPaperFields.AWARDS][0] === Award.GREEN).length },
      { name: 'Badge: Artifacts Evaluated Reusable', value: papers.filter(p => p[GeneralPaperFields.AWARDS].length === 1 && p[GeneralPaperFields.AWARDS][0] === Award.RED).length },
      { name: 'Keine Awards oder Badges', value: papers.filter(p => p[GeneralPaperFields.AWARDS].length === 0).length },
    ];

    this.continentData = [];
    for (const continent of Object.keys(Continent)) {
      const value = papers.filter(p => p[GeneralPaperFields.CONTINENTS].findIndex(c => c === continent) > -1).length;
      this.continentData.push({name: continent, value});
    }
  }
}
