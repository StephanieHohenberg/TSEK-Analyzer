import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {VisibilityService} from './services/visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute,
              private visibilityService: VisibilityService) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        if (params.visible) {
          this.visibilityService.hideAllFieldsExcept(params.visible);
        }
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

