import { Component } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { INode } from './node.config';

@Component({
  selector: 'app-node-code-flow',
  imports: [ FeatherModule ],
  templateUrl: './node-code-flow.component.html',
  styleUrl: './node-code-flow.component.scss'
})
export class NodeCodeFlowComponent {
  isOpenFunctionBar: boolean = true;
  isLock: boolean = true;

  customerJourneyNodeList: INode[] = [];

  toggleFunctionBar() {
    this.isOpenFunctionBar = !this.isOpenFunctionBar
  }

  toggleLock() {
    this.isLock = !this.isLock
  }

  drag(ev: DragEvent) {
    console.log('drag', ev);
    ev.dataTransfer?.setData("node", (ev.target as HTMLElement).getAttribute('data-node') || '');
  }
}
