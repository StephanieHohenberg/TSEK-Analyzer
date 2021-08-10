import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {VisibilityService} from './services/visibility.service';
import {PaperService} from "./services/paper.service";
import {Vorkommen, Zweck} from "./model/context.data";
import {ContextService} from "./services/context.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute,
              private visibilityService: VisibilityService,
              private paperService: PaperService,
              private contextService: ContextService) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        if (params.visible) {
          this.visibilityService.hideAllFieldsExcept(params.visible);
        }
      });
    this.logStatistics();
    this.logUnAttachedContext();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private logStatistics(): void {
    const z = Zweck.ERWEITERUNG;
    const n = this.paperService.getAmountOfContext(z, null);
    // console.log(z, n);
    let total = 0;
    Object.values(Vorkommen).forEach(v => {
      const amount = this.paperService.getAmountOfContext(z, v);
      total += amount;
      // console.log(v, amount);
    });
    console.log(total, 'total');

    Object.values(Vorkommen).forEach(v => {
      const nV = this.paperService.getAmountOfContext(null, v);
      console.log(v, nV);
    });
  }

  private logUnAttachedContext(): void {
    console.log(this.contextService.getNodesUnintegratedInTaxonomy(), 'unintegrated');
  }

}

