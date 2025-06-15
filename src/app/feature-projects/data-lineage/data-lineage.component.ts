import { AfterViewInit, Component } from '@angular/core';
import { MockData } from './mock-data';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

declare var d3: any;
declare var FamilyTree: any;

@Component({
  selector: 'app-data-lineage',
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './data-lineage.component.html',
  styleUrl: './data-lineage.component.scss'
})
export class DataLineageComponent implements AfterViewInit {

  data = MockData;

  ngAfterViewInit(): void {
    const svg = d3
      .select('#svgContainer')
      .append('svg')
      .attr('width', '800')
      .attr('height', '400');

    // make family tree object
    let FT = new FamilyTree(this.data, svg);

    // draw family tree
    FT.draw();
  }

}
