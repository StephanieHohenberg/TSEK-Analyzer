import {Component, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {GraphData} from './graph.data';
import {FilterService} from '../../services/filter.service';
import {Subject} from 'rxjs';
import * as cytoscape from 'cytoscape';
import {ContextService} from '../../services/context.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy, OnChanges {

  public elements: GraphData;
  private layout: any;
  private style: any;
  private cy;
  private unsubscribe$ = new Subject();

  public constructor(private filterService: FilterService,
                     private contextService: ContextService,
                     private renderer: Renderer2, private el: ElementRef) {
  }

  public ngOnInit(): void {
    this.initializeGraphConfiguration();
    this.render();
    this.elements = this.contextService.getGraphDataForAllContexts();
    this.filterService.getFilterUpdates$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filterUpdate => {
        this.elements = this.contextService.getGraphDataForAllContexts();
        // this.data = this.paperService.getFilteredGeneralData(filterUpdate, this.filterService.getFilter());
        this.render();
      });
  }

  public ngOnChanges(): any {
    this.render();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeGraphConfiguration(): void {
    this.layout = {
      name: 'cose',
      //      rankDir: 'LR',
      directed: true,
      padding: 0
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
        'text-outline-color': 'data(colorCode)',
        'background-color': 'data(colorCode)',
        'color': '#fff',
        'font-size': 10
      })
      .selector(':selected')
      .css({
        'border-width': 1,
        'border-color': 'black'
      })
      .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.8,
        'width': '2',
        'line-color': 'grey',
        'target-arrow-color': 'grey',
        'target-arrow-shape': 'triangle'
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
