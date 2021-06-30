import {Injectable} from '@angular/core';
import {EdgeData, EdgeDataWrapper, GraphData, NodeData, NodeDataWrapper} from '../components/context-graph/graph.data';
import {getContextDataOfRoots, getContextMap} from '../data/context/context';
import {ContextData, ContextFields, Zweck} from '../model/context.data';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private readonly DEFAULT_WEIGHT = 10;
  private contextMap: Map<string, ContextData>;

  constructor() { }

  public getGraphDataForRoots(): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];

    const roots: ContextData[] = getContextDataOfRoots();
    roots.forEach((context, _) => {
      const prefix = context[ContextFields.SUB] ? ' (' + context[ContextFields.SUB].length + ')' : '';
      const word = context[ContextFields.LABEL] + prefix;
      nodes.push({data: new NodeData(context.id, word , 'darkslateblue')});
    });
    return { nodes, edges};
  }

  public getGraphDataForRootAndKids(rootID: string): GraphData {
    let nodes: NodeDataWrapper[] = [];
    let edges: EdgeDataWrapper[] = [];
    this.initContextMap();

    const root = this.contextMap.get(rootID);
    if (!root) { console.log(rootID); }
    const subs = this.getSubIDsOfContext(root);
    const prefix = subs.length > 0 ? ' (' + subs.length + ')' : '';
    const word = root[ContextFields.LABEL] + prefix;
    nodes.push({data: new NodeData(root.id, word , 'darkslateblue')});

    subs.forEach((subID, _) => {
      const context = this.contextMap.get(subID);
      edges.push({data: new EdgeData(rootID, subID, 'solid')});
      const subData = this.getGraphDataForRootAndKids(subID);
      nodes = nodes.concat(subData.nodes);
      edges = edges.concat(subData.edges);
    });

    return { nodes, edges};
  }

  public getSubGraphElementsOf(rootID: string): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];
    this.initContextMap();

    const root = this.contextMap.get(rootID);
    const subs = this.getSubIDsOfContext(root);

    subs.forEach((subID, _) => {
      const context = this.contextMap.get(subID);
      const nSubs = this.getSubIDsOfContext(context).length;
      const prefix = nSubs > 0 ? ' (' + nSubs + ')' : '';
      const word = context[ContextFields.LABEL] + prefix;
      nodes.push({data: new NodeData(subID, word, 'darkslateblue')});
      edges.push({data: new EdgeData(rootID, subID, 'solid')});
    });

    return { nodes, edges};
  }

  public getGraphDataByContextIDs(contextIDs: string[], focus: boolean): GraphData {
    const nodes: NodeDataWrapper[] = [];
    const edges: EdgeDataWrapper[] = [];

    console.log(contextIDs, 'contextIDs');
    this.initContextMap();
    const parentIDs: string[] = [];

    contextIDs.forEach(id => {
      const context = this.contextMap.get(id);
      const colorCode = focus ? this.getColorCodeForContext(context) : 'darkslateblue';
      nodes.push({data: new NodeData(context.id, context[ContextFields.LABEL], colorCode)});

      let childID = id;
      let parentID = context[ContextFields.PARENT];
      console.log(parentID, 'parentID-0');
      while (parentID !== undefined) {
        const parent = this.contextMap.get(parentID);
        if (parent[ContextFields.COLLECTING] && parent[ContextFields.COLLECTING].includes(childID)) {
          parentID = parent[ContextFields.PARENT];
        } else {
          if (!contextIDs.includes(parentID)) {
            const parentColorCode = focus ? 'grey' : 'darkslateblue';
            nodes.push({data: new NodeData(parentID, parent[ContextFields.LABEL], parentColorCode)});
            parentIDs.push(parentID);
          }
          if (edges.filter(e => e.data.source === parentID && e.data.target === childID).length === 0) {
            const lineStyle = childID === id && context[ContextFields.ZWECK] === Zweck.ABGRENZUNG ? 'dotted' : 'solid';
            edges.push({data: new EdgeData(parentID, childID, lineStyle)});
            childID = parentID;
            parentID = parent[ContextFields.PARENT];
          } else {
            parentID = undefined;
          }

        }
        // TODO: label mit siblings ?
      }
    });
    return { nodes, edges};
  }

  private getSubIDsOfContext(context: ContextData): string[] {
    let subs: string[] = context[ContextFields.SUB] || [];
    if (context[ContextFields.COLLECTING]) {
      this.initContextMap();
      context[ContextFields.COLLECTING]
        .forEach(cID => {
          const c = this.contextMap.get(cID);
          const s = c[ContextFields.SUB];
          if (s) { subs = subs.concat(s); }
        });
    }
    return subs;
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
    return 'darkslateblue';
  }

  private getWeightForContext(context: ContextData): number {
    const amountOfSubs = context[ContextFields.SUB] ? context[ContextFields.SUB].length : 0;
    const amountOfIdentical = context[ContextFields.COLLECTING] ? context[ContextFields.COLLECTING].length : 0;
    const factor = amountOfIdentical + amountOfSubs;
    return this.DEFAULT_WEIGHT + (5 * factor);
  }

  private initContextMap(): void {
    if (!this.contextMap) {
      this.contextMap = getContextMap();
    }
  }
}
