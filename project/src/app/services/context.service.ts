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
    const edges: EdgeDataWrapper[] = [];    const map: Map<string, ContextData> = getContextMap();
    map.forEach((context, key) => {
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL])});
      if (context[ContextFields.PARENT]) {
        edges.push({data: new EdgeData(context[ContextFields.PARENT], context.id)});
      }
    });
    return { nodes, edges};
  }
}
