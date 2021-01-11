import {Component, Input, OnInit} from '@angular/core';
import {PaperService} from '../../../../services/paper.service';
import {GeneralizationData, generalizationFieldList, GeneralizationFields} from '../../../../data/generalization.data';

@Component({
  selector: 'app-panel-content-verallgemeinbarkeit',
  templateUrl: './panel-content-verallgemeinbarkeit.component.html',
  styleUrls: ['./panel-content-verallgemeinbarkeit.component.css']
})
export class PanelContentVerallgemeinbarkeitComponent implements OnInit {

  @Input() public paperId: string;
  public generalizationData: GeneralizationData;
  public readonly fieldList: GeneralizationFields[] = generalizationFieldList;
  public panelOpenState = false;

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    if (this.paperId) {
      this.generalizationData = this.paperService.getGeneralizationDataByID(this.paperId);
    }
  }
}
