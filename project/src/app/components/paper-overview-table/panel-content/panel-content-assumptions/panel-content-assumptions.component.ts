import {Component, Input, OnInit} from '@angular/core';
import {PaperService} from '../../../../services/paper.service';
import {AssumptionData, AssumptionFields} from '../../../../data/assumption.data';

@Component({
  selector: 'app-panel-content-assumptions',
  templateUrl: './panel-content-assumptions.component.html',
  styleUrls: ['./panel-content-assumptions.component.css']
})
export class PanelContentAssumptionsComponent implements OnInit {

  @Input() public paperId: string;
  public assumptionData: AssumptionData;
  public readonly assumptionPaperFields = AssumptionFields;
  public panelOpenState = false;

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    if (this.paperId) {
      this.assumptionData = this.paperService.getAssumptionDataByID(this.paperId);
    }
  }

}
