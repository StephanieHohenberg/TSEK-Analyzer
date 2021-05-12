import {Injectable} from '@angular/core';
import {analysisPaperFieldList, AnalysisPaperFields} from '../model/paper.data';
import {Observable, Subject} from 'rxjs';
import {GraphVisibilityUpdate, GraphVisibilityUpdateType} from '../model/filter.data';

export enum  ScreenComponent { SIDE_BAR, GRAPH}

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  private hiddenElement: ScreenComponent;
  private filterVisible = true;
  private hiddenFields: string[] = [AnalysisPaperFields.ASSUMPTIONS];
  private graphUpdate$ = new Subject<GraphVisibilityUpdate>();

  constructor() { }

  public toggleSidebar(): void {
    if (this.hiddenElement === ScreenComponent.SIDE_BAR) {
      this.hiddenElement = null;
    } else {
      this.hiddenElement = ScreenComponent.SIDE_BAR;
    }
  }

  public toggleGraph(): void {
    if (this.hiddenElement === ScreenComponent.GRAPH) {
      this.hiddenElement = null;
    } else {
      this.hiddenElement = ScreenComponent.GRAPH;
    }
  }

  public toggleFilter(): void {
    this.filterVisible = !this.filterVisible;
  }

  public toggleFieldVisibility(field: string): void {
    if (!this.hiddenFields.includes(field)) {
      this.hiddenFields.push(field);
    } else {
      this.hiddenFields = this.hiddenFields.filter(f => f !== field);
    }
  }

  public hideAllFieldsExcept(field: string): void {
    const fields = analysisPaperFieldList.filter(f => f !== field);
    this.hiddenFields = fields.length < analysisPaperFieldList.length ? fields : this.hiddenFields;
  }

  public showContextsOfPaper(paperID: string): void {
    this.graphUpdate$.next({type: GraphVisibilityUpdateType.SHOW_PAPER, id: paperID});
    if (this.isGraphHidden()) {
      this.hiddenElement = null;
    }
  }

  public highlightContext(contextID: string): void {
    this.graphUpdate$.next({type: GraphVisibilityUpdateType.HIGHLIGHT_CONTEXT, id: contextID});
    if (this.isGraphHidden()) {
      this.hiddenElement = null;
    }
  }

  public isSidebarHidden(): boolean {
    return this.hiddenElement === ScreenComponent.SIDE_BAR;
  }

  public isGraphHidden(): boolean {
    return this.hiddenElement === ScreenComponent.GRAPH;
  }

  public isFilterVisible(): boolean {
    return this.filterVisible;
  }

  public isFieldVisible(field: string): boolean {
    return !this.hiddenFields.includes(field);
  }

  public isOnlyOneFieldVisible(): boolean {
    return this.hiddenFields.length === analysisPaperFieldList.length - 1;
  }

  public getGraphUpdates$(): Observable<GraphVisibilityUpdate> {
    return this.graphUpdate$.asObservable();
  }
}
