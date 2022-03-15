export class NodeModel {
    type: 'folder' | 'file' | 'unset' | null;
    name?: string;
    children?: NodeModel[];
    id: string;

    // Had to add a constructor to the node model class resolve strict type settings
    constructor(type:'folder' | 'file' | 'unset' | null, name: string, children:NodeModel[], id:string) {
        this.type = type;
        this.name = name;
        this.children = children;
        this.id = id;
    }
}