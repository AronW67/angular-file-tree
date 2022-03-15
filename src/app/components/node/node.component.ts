import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  public folderImgPath:string = './assets/images/folder-open-regular.svg';

  public fileImgPath:string = './assets/images/file-regular.svg';
  
  public selectFileTypeDisplay:boolean = false;

  public selectedType:'folder' | 'file' | 'unset' | null;

  public enterItemNameDisplay:boolean = false;

  @Input() public nodeData:NodeModel;

  @Input() public rootNode:boolean;

  @Output() public emitDeleteRootNode = new EventEmitter<string>();

  @Output() public emitDeleteNode = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Function to start process of adding node
  addChildNode(): void {
    console.log('Adding child node');
    this.selectFileTypeDisplay = true;
  }

  // Function to set selected file type
  setSelectedFileType(type:'folder' | 'file' | 'unset' | null): void {
    this.selectedType = type;
    this.selectFileTypeDisplay = false;
    this.enterItemNameDisplay = true;
  }

  // Function to save node data to nodeModel.children
  saveNode(fileName: string): void {
    if (fileName == '') {
      this.closeAdd();
    } else {
      let newNode = new NodeModel(this.selectedType, fileName, [], Date.now().toString());
      this.nodeData.children.push(newNode);
      this.closeAdd();
    }
  }

  // Stop adding a node and reset values
  closeAdd(): void {
    this.selectedType = null;
    this.selectFileTypeDisplay = false;
    this.enterItemNameDisplay = false;
  }

  // Remove node from tree
  deleteNode(): void {
    if (this.rootNode) {
      console.log('Deleting node id: ' + this.nodeData.id);
      this.emitDeleteRootNode.emit(this.nodeData.id);
    } else {
      this.emitDeleteNode.emit(this.nodeData.id);
    }
  }

  deleteChildNode(value:string): void {
    this.nodeData.children.forEach((node, index) => {
      if (node.id == value) {
        this.nodeData.children.splice(index, index);
      }
    })
  }

}
