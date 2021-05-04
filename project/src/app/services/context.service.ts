import {Injectable} from '@angular/core';
import {EdgeData, EdgeDataWrapper, GraphData, NodeData, NodeDataWrapper} from '../components/context-graph/graph.data';
import {getContextMap} from '../../assets/data/context/context';
import {ContextData, ContextFields} from '../data/context.data';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor() { }

  public getGraphDataForAllContexts(): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];
    const map: Map<string, ContextData> = getContextMap();
    map.forEach((context, _) => {
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL])});
      if (context[ContextFields.PARENT]) {
        edges.push({data: new EdgeData(context[ContextFields.PARENT], context.id)});
      }
    });
    return { nodes, edges};
  }

  public getGraphDataByContextIDs(contextIDs: string[]): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];
    const map: Map<string, ContextData> = getContextMap();
    contextIDs.forEach(id => {
      const context = map.get(id);
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL])});
      if (context[ContextFields.PARENT]) {
        if (!contextIDs.includes(context[ContextFields.PARENT])) {
          const parent = map.get(context[ContextFields.PARENT]);
          nodes.push({data: new NodeData(parent.id, parent[ContextFields.LABEL])});
          // TODO: what to display for focus view ?
        }
        edges.push({data: new EdgeData(context[ContextFields.PARENT], context.id)});
      }
    });
    return { nodes, edges};
  }
}
