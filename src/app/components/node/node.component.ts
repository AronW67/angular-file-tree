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

  public selectedType:'folder' | 'file' | 'unset' | null = null;

  public enterItemNameDisplay:boolean = false;

  public fileNameInput:string = '';

  @Input() public nodeData?:NodeModel;

  @Input() public rootNode?:boolean;

  @Output() public emitDeleteRootNode = new EventEmitter<string>();

  @Output() public emitDeleteNode = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // Function to start process of adding node
  addNode(): void {
    console.log('Adding node');
    this.nodeData?.children?.push(new NodeModel(null, '', [], Date.now().toString(), false));
  }

  // Function to set selected file type
  setSelectedFileType(type:'folder' | 'file' | 'unset' | null): void {
    if (this.nodeData !== undefined) this.nodeData.type = type;
  }

  // Function to save node data to nodeModel.children
  saveNode(): void {
    if (this.fileNameInput !== '') {
      if (this.nodeData !== undefined) {
        this.nodeData.name = this.fileNameInput;
      }
    } else {
      this.deleteNode();
    }
  }

  // Remove node from tree
  deleteNode(): void {
    if (this.rootNode) {
      console.log('Deleting node id: ' + this.nodeData?.id);
      this.emitDeleteRootNode.emit(this.nodeData?.id);
    } else {
      this.emitDeleteNode.emit(this.nodeData?.id);
    }
  }

  deleteChildNode(value:string): void {
    this.nodeData?.children?.forEach((node, index) => {
      if (node.id == value) {
        this.nodeData?.children?.splice(index, 1);
      }
    })
  }

}
