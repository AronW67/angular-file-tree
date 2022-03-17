export class NodeModel {
    type?: 'folder' | 'file' | 'unset' | null;
    name?: string;
    children?: NodeModel[];
    id?: string;
    rootNode?: boolean;

    constructor(type:'folder' | 'file' | 'unset' | null, name: string, children:NodeModel[], id:string, rootNode: boolean) {
        this.type = type;
        this.name = name;
        this.children = children;
        this.id = id;
        this.rootNode = rootNode;
    }
}