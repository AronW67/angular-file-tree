import { Injectable } from '@angular/core';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {

  constructor() { 
  }

  getNodeData():NodeModel[] {
    return [{
      type: 'folder',
      name: 'Root node',
      children: [{
        type: 'file',
        name: 'Text.txt',
        children: [],
        id: '1647330126328',
        rootNode: false
      },
      {
        type: 'file',
        name: 'Another Text File.txt',
        children: [],
        id: '1647330126329',
        rootNode: false
      },
      {
        type: 'file',
        name: 'I Like Dogs.docx',
        children: [],
        id: '1647330126330',
        rootNode: false
      },
      {
        type: 'folder',
        name: 'images',
        children: [],
        id: '1647330126340',
        rootNode: false
      }],
      id: '1647330128375',
      rootNode: true
    }]
  }
}
