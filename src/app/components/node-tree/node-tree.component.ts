import { Component, OnInit } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.scss']
})
export class NodeTreeComponent implements OnInit {

  // Empty nodeListData object if you want to start with an empty array
  //public nodeListData:NodeModel[]; 
  
  // Sample nodeListData data 
  public nodeListData:NodeModel[] = [{
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
  }]; 

  public enterItemNameDisplay:boolean = false;

  public fileNameInput?: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.nodeListData);
  }

  // Function to start process of adding root node
  addRootNode(): void {
    console.log('Adding child node');
    this.nodeListData.push(new NodeModel('folder', '', [], Date.now().toString(), true));
  }

  // Stop adding a node and reset values
  closeAdd(): void {
    this.enterItemNameDisplay = false;
  }

  // Function to delete node from nodeListData
  deleteNode(value:string): void {
    this.nodeListData.forEach((node, index) => {
      if (node.id == value) {
        this.nodeListData.splice(index, 1);
      }
    })
  }

}
