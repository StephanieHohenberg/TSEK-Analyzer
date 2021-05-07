export interface GraphData {
  nodes: NodeDataWrapper[];
  edges: EdgeDataWrapper[];
}

export interface NodeDataWrapper {
  data: NodeData;
}

export interface EdgeDataWrapper {
  data: EdgeData;
}

export class NodeData {

  public id;
  public label: string;
  public colorCode;
  public weight;

  constructor(ID, word: string, colorCode: string, weight?: number = 20) {
    this.id = ID;
    this.label = word;
    this.colorCode = colorCode;
    this.weight = weight;
  }
}


export class EdgeData {
  public source;
  public target;
  public linkID;
  public linkStrength = 10;
  public lineStyle;

  constructor(sourceID, targetID, lineStyle: string) {
    this.source = sourceID;
    this.target = targetID;
    this.linkID = `${sourceID}-${targetID}`;
    this.lineStyle = lineStyle
  }
}
