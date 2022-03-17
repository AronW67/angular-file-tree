import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeTreeComponent } from './components/node-tree/node-tree.component';
import { NodeComponent } from './components/node/node.component';
import { FormsModule } from '@angular/forms';
import { NodeDataService } from './services/node-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeTreeComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NodeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
