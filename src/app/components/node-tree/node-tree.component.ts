import { Component, OnInit } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';
import { NodeDataService } from 'src/app/services/node-data.service';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.scss']
})
export class NodeTreeComponent implements OnInit {
  
  public nodeListData:NodeModel[] = [];

  public enterItemNameDisplay:boolean = false;

  constructor(public _nodeDataService:NodeDataService) { 
  }

  ngOnInit(): void {
    this.nodeListData = this._nodeDataService.getNodeData();
  }

  // Function to start process of adding root node
  addRootNode(): void {
    console.log('Adding root node');
    this.nodeListData.push(new NodeModel('folder', '', [], Date.now().toString(), true));
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
