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
      id: '1647330126328'
    },
    {
      type: 'file',
      name: 'Another Text File.txt',
      children: [],
      id: '1647330126329'
    },
    {
      type: 'file',
      name: 'I Like Dogs.docx',
      children: [],
      id: '1647330126330'
    },
    {
      type: 'folder',
      name: 'images',
      children: [],
      id: '1647330126340'
    }],
    id: Date.now().toString()
  }]; 

  public enterItemNameDisplay:boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.nodeListData);
  }

  // Function to start process of adding root node
  addRootNode(): void {
    console.log('Adding child node');
    this.enterItemNameDisplay = true;
  }

  // Function to save root node
  saveRootNode(fileName: string): void {
    let newNode = new NodeModel('folder', fileName, [], Date.now().toString());
    this.nodeListData.push(newNode);
    this.closeAdd();
  }

  // Stop adding a node and reset values
  closeAdd(): void {
    this.enterItemNameDisplay = false;
  }

  // Function to delete node from nodeListData
  deleteNode(value:string): void {
    this.nodeListData.forEach((node, index) => {
      if (node.id == value) {
        this.nodeListData.splice(index, index);
      }
    })
  }

}
