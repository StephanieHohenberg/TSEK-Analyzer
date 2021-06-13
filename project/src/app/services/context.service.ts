import {Injectable} from '@angular/core';
import {EdgeData, EdgeDataWrapper, GraphData, NodeData, NodeDataWrapper} from '../components/context-graph/graph.data';
import {getContextMap} from '../data/context/context';
import {ContextData, ContextFields, Zweck} from '../model/context.data';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private readonly DEFAULT_WEIGHT = 10;

  constructor() { }

  public getGraphDataForAllContexts(): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];
    const map: Map<string, ContextData> = getContextMap();
    map.forEach((context, _) => {
      if (this.shouldHideContext(context)) {
        console.log(context.id + ': "' + context[ContextFields.LABEL] + '" hidden in taxonomy');
        return;
      }
      const weight = this.getWeightForContext(context);
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL], 'darkslateblue', weight)});
      if (context[ContextFields.PARENT]) {
        edges.push({data: new EdgeData(context[ContextFields.PARENT], context.id, 'solid')});
      }
    });
    return { nodes, edges};
  }

  public getGraphDataByContextIDsWithWeightedStyle(contextIDs: string[]): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];
    const map: Map<string, ContextData> = getContextMap();
    contextIDs.forEach(id => {
      const context = map.get(id);
      const weight = this.getWeightForContext(context);
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL], 'darkslateblue', weight)});
      if (context[ContextFields.PARENT]) {
        if (!contextIDs.includes(context[ContextFields.PARENT])) {
          const parent = map.get(context[ContextFields.PARENT]);
          const pWeight = this.getWeightForContext(parent);
          nodes.push({data: new NodeData(parent.id, parent[ContextFields.LABEL], 'darkslateblue', pWeight)});
        }
        edges.push({data: new EdgeData(context[ContextFields.PARENT], context.id, 'solid')});
      }
    });
    return { nodes, edges};
  }

  public getGraphDataByContextIDsWithColoredStyle(contextIDs: string[]): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];
    const map: Map<string, ContextData> = getContextMap();
    contextIDs.forEach(id => {
      const context = map.get(id);
      const colorCode = this.getColorCodeForContext(context);
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL], colorCode)});
      if (context[ContextFields.PARENT]) {
        if (!contextIDs.includes(context[ContextFields.PARENT])) {
          const parent = map.get(context[ContextFields.PARENT]);
          const pColorCode = this.getColorCodeForContext(parent);
          nodes.push({data: new NodeData(parent.id, parent[ContextFields.LABEL], pColorCode)});
          // TODO: node/edge styling + legend
          // TODO: what to display for focus view ?
          // TODO: add parents of shared context
        }
        const lineStyle = context[ContextFields.ZWECK] === Zweck.ABGRENZUNG ? 'dotted' : 'solid';
        edges.push({data: new EdgeData(context[ContextFields.PARENT], context.id, lineStyle)});
      }
    });
    return { nodes, edges};
  }


  private getColorCodeForContext(context: ContextData): string {
    const zweck = context[ContextFields.ZWECK];
    switch (zweck) {
      case Zweck.ANWENDUNG: return 'orange';
      case Zweck.VAGUE_VERALLGEMEINBARKEIT:
      case Zweck.VERALLGEMEINBARKEIT:
      case Zweck.ERWEITERUNG:
        return 'lightblue';
    }
    return 'white';
  }

  private getWeightForContext(context: ContextData): number {
    const amountOfSubs = context[ContextFields.SUB] ? context[ContextFields.SUB].length : 0;
    const factor = context[ContextFields.WEIGHT_FACTOR] || amountOfSubs;
    return this.DEFAULT_WEIGHT + (5 * factor);
  }

  private shouldHideContext(context: ContextData): boolean {
    return context[ContextFields.HIDE]  ||
      (!context[ContextFields.PARENT] && !context[ContextFields.SUB] && !context[ContextFields.WEIGHT_FACTOR]);
  }
}
