import {Component, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {EdgeDataWrapper, GraphData, NodeDataWrapper} from './graph.data';
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
  private subGraphElementsMap = new Map<string, GraphData>();
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
    document.addEventListener('DOMContentLoaded', () => {
      this.render();
      this.initializeGraphInteractions();
    });
  }

  public ngOnChanges(): any {
    this.render();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeGraphElements(): void {
    this.elements = this.contextService.getGraphDataForRoots();
    // this.elements = this.contextService.getGraphDataForRootAndKids('SOFTWARE_TOOLS');
    this.render();

    this.visibilityService.getGraphUpdates$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(graphUpdate => {
        switch (graphUpdate.type) {
          case GraphVisibilityUpdateType.SHOW_PAPER: this.showPaper(graphUpdate.paperID); break;
          case GraphVisibilityUpdateType.HIGHLIGHT_CONTEXT: this.showContext(graphUpdate.paperID, graphUpdate.contextID); break;
        }
      });
  }

  private initializeGraphInteractions(): void {
    this.cy.on('tap', 'node', (e) => {
      const ele = e.target;
      if (ele.isNode()){
        this.toggleSubGraphElements(ele.id());

      }
    });
  }

  private toggleSubGraphElements(rootID: string): void {
    if (!this.subGraphElementsMap.has(rootID)) { // display
      const graphElements = this.contextService.getSubGraphElementsOf(rootID);
      const eles = this.cy.add(graphElements);
      this.subGraphElementsMap.set(rootID, eles);
      // TODO add for parent nodes
    } else { // hide
      const eles = this.subGraphElementsMap.get(rootID);
      this.subGraphElementsMap.delete(rootID);
      this.cy.remove(eles);
    }
  }

  private showPaper(paperID: string): void {
    const data = { filterTab: AnalysisPaperFields.GENERAL_DATA, field: GeneralPaperFields.ID, value: paperID, label: 'ID: '};
    const filter = [...this.filterService.getFilter()].concat([data]);
    const contextIDs = this.getContextIDsByFilter(
      { type: FilterUpdateType.ADD_FILTER, connector: FilterConnector.UND, data}, filter);
    this.elements = this.contextService.getGraphDataByContextIDs(contextIDs, true);
    this.render();
    this.currentGraphVisibilityPaperId = paperID;
  }

  private showContext(paperID: string, contextID: string): void {
    const el =  this.cy.$(`#${contextID}`);
    if (el.length === 0) {
      this.showPaper(paperID);
      this.showContext(paperID, contextID);
    } else {
      this.cy.fit(el);
      this.highlightedContextIDs.push(contextID);
    }
  }

  public removeFocusOnPaper(): void {
    if (this.currentGraphVisibilityPaperId) {
      this.elements = this.contextService.getGraphDataForRoots();
      this.currentGraphVisibilityPaperId = undefined;
      this.render();
      this.initializeGraphInteractions();
    }
  }

  public unhighlightContexts(): void {
    this.cy.fit();
    this.highlightedContextIDs = [];
  }

  private getContextIDsByFilter(filterUpdate: FilterUpdate, filterData: FilterData[]): string[] {
    let contextIDs: string[] = [];
    this.paperService.getFilteredGeneralData(filterUpdate, filterData).forEach(paper => {
      const paperID = paper[GeneralPaperFields.ID];
      contextIDs = contextIDs.concat(this.paperService.getPapersContextsByID(paperID).map(c => c.id));
    });
    return contextIDs;
  }

  private initializeGraphConfiguration(): void {
    const layoutTest = {
      name: 'breadthfirst',
      fit: true, // whether to fit the viewport to the graph
      directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
      padding: 30, // padding on fit
      circle: true, // put depths in concentric circles if true, put depths top down if false
      grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
      spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
      roots: undefined, // the roots of the trees
      maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
      animate: false, // whether to transition the node positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled,
      animateFilter: ( node, i ) => true, // a function that determines whether the node should be animated
      ready: undefined, // callback on layoutready
      stop: undefined, // callback on layoutstop
      transform: (node, position ) => position,
    };

    this.layout = {
      name: 'cose',
      fit: true, // whether to fit the viewport to the graph
      directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
      refresh: 20,
      componentSpacing: 120,
      animate: true,
      spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      avoidOverlap: true,
      idealEdgeLength: ( edge ) => 64,
    };

    const trialLayout = {
      name: 'breadthfirst',
      fit: true, // whether to fit the viewport to the graph
      directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
      padding: 100, // padding on fit
      circle: false, // put depths in concentric circles if true, put depths top down if false
      grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
      spacingFactor: 5, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
      // roots: ['APPLICATIONS'], // the roots of the trees
      maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
      animate: false, // whether to transition the node positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled,
      animateFilter: ( node, i ) => true, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: undefined, // callback on layoutready
      stop: undefined, // callback on layoutstop
      transform: (node, position ) => position
    };


    this.style = cytoscape.stylesheet()
      .selector('node')
      .css({
        'shape': 'circle',
        'width': 'data(weight)',
        'height': 'data(weight)',
        'content': 'data(label)',
        'text-valign': 'bottom',
        'text-halign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'white',
        'text-max-width': '50px',
        'background-color': 'data(colorCode)',
        'color': 'black',
        'font-size': 16
      })
      .selector(':selected')
      .css({
        'border-width': 1,
        'border-color': 'black'
      })
      .selector('edge')
      .css({
        'curve-style': 'bezier', // 'taxi',
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

  private getDataOfAllDisplayedGraphElements(): GraphData {
    let nodes: NodeDataWrapper[] = this.elements.nodes;
    let edges: EdgeDataWrapper[] = this.elements.edges;

    this.subGraphElementsMap.forEach((data, key) => {
      nodes = nodes.concat(data.nodes);
      edges = edges.concat(data.edges);
    });
    console.log(nodes.length, 'nodes');
    console.log(edges.length, 'edges');
    return { nodes, edges};
  }
}
