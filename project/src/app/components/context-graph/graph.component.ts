import {Component, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {GraphData} from './graph.data';
import {FilterService} from '../../services/filter.service';
import {BehaviorSubject, Subject} from 'rxjs';
import * as cytoscape from 'cytoscape';
import {ContextService} from '../../services/context.service';
import {PaperService} from '../../services/paper.service';
import {AnalysisPaperFields, GeneralPaperFields} from '../../model/paper.data';
import {
  FilterConnector,
  FilterData,
  FilterUpdate,
  FilterUpdateType,
  GraphVisibilityUpdateType
} from '../../model/filter.data';
import {VisibilityService} from '../../services/visibility.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy, OnChanges {

  public elements: GraphData;
  public currentGraphVisibilityPaperId: string;
  public highlightedContextIDs: string[] = [];
  private layout: any;
  private style: any;
  private cy;
  private unsubscribe$ = new Subject();
  private  = new BehaviorSubject<FilterData[]>([]);


  public constructor(private filterService: FilterService,
                     private paperService: PaperService,
                     public visibilityService: VisibilityService,
                     private contextService: ContextService,
                     private renderer: Renderer2, private el: ElementRef) {
  }

  public ngOnInit(): void {
    this.initializeGraphConfiguration();
    this.initializeGraphElements();
    this.render();
  }

  public ngOnChanges(): any {
    this.render();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeGraphElements(): void {
    this.filterService.getFilterUpdates$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filterUpdate => {
        if (filterUpdate.type === FilterUpdateType.RESET_FILTER) {
          this.elements = this.contextService.getGraphDataForAllContexts();
        } else {
          this.applyFilter(filterUpdate, [...this.filterService.getFilter()]);
          this.render();
        }
      });

    this.visibilityService.getGraphUpdates$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(graphUpdate => {
        switch (graphUpdate.type) {
          case GraphVisibilityUpdateType.SHOW_PAPER:
            const data = { filterTab: AnalysisPaperFields.GENERAL_DATA, field: GeneralPaperFields.ID, value: graphUpdate.id, label: 'ID: '};
            const filter = [...this.filterService.getFilter()].concat([data]);
            this.applyFilter({ type: FilterUpdateType.ADD_FILTER, connector: FilterConnector.UND, data}, filter);
            this.render();
            this.currentGraphVisibilityPaperId = graphUpdate.id;
            break;
          case GraphVisibilityUpdateType.HIGHLIGHT_CONTEXT:
            this.highlightedContextIDs.push(graphUpdate.id);
            break;
        }
      });
  }

  private removeFocusOnPaper(): void {
    if (this.currentGraphVisibilityPaperId) {
      // tslint:disable-next-line:max-line-length
      const data = { filterTab: AnalysisPaperFields.GENERAL_DATA, field: GeneralPaperFields.ID, value: this.currentGraphVisibilityPaperId, label: 'ID: '};
      this.applyFilter({ type: FilterUpdateType.DELETE_FILTER, connector: FilterConnector.UND, data}, [...this.filterService.getFilter()]);
      this.currentGraphVisibilityPaperId = undefined;
      this.render();
    }
  }

  private unhighlightContexts(): void {
    this.highlightedContextIDs = [];
    this.render();
  }

  private applyFilter(filterUpdate: FilterUpdate, filterData: FilterData[]): void {
    let contextIDs: string[] = [];
    this.paperService.getFilteredGeneralData(filterUpdate, filterData).forEach(paper => {
      const paperID = paper[GeneralPaperFields.ID];
      contextIDs = contextIDs.concat(this.paperService.getPapersContextsByID(paperID).map(c => c.id));
    });
    this.elements = this.contextService.getGraphDataByContextIDs(contextIDs);
  }

  private initializeGraphConfiguration(): void {
    this.layout = {
      name: 'cose',
      componentSpacing: 120,
      animate: false, // TODO display table with loader already
      avoidOverlap: true,
      idealEdgeLength: ( edge ) => 64,
    };

    this.style = cytoscape.stylesheet()
      .selector('node')
      .css({
        shape: 'circle',
        'width': 'data(weight)',
        'height': 'data(weight)',
        'content': 'data(label)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'white',
        'text-max-width': '50px',
        'background-color': 'data(colorCode)',
        'color': 'black',
        'font-size': 10
      })
      .selector(':selected')
      .css({
        'border-width': 1,
        'border-color': 'black'
      })
      .selector('edge')
      .css({
        'curve-style': 'taxi',
        'line-style': 'data(lineStyle)',
        'opacity': 0.8,
        'width': '2',
        'line-color': 'grey',
        'target-arrow-color': 'grey',
        'target-arrow-shape': 'triangle-cross'
      })
      .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      });
  }

  public render(): void {
    const cyContainer = this.renderer.selectRootElement('#cy');
    this.cy = cytoscape({
      container: cyContainer,
      layout: this.layout,
      minZoom: 0.1,
      maxZoom: 1.5,
      style: this.style,
      elements: this.elements,
    });
  }
}
