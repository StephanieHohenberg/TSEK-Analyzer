import {Component, Input, OnInit} from '@angular/core';
import {PaperService} from '../../../../services/paper.service';
import {GeneralizationData, generalizationFieldList, GeneralizationFields} from '../../../../model/generalization.data';

@Component({
  selector: 'app-panel-content-verallgemeinbarkeit',
  templateUrl: './panel-content-verallgemeinbarkeit.component.html',
  styleUrls: ['./panel-content-verallgemeinbarkeit.component.css']
})
export class PanelContentVerallgemeinbarkeitComponent implements OnInit {

  @Input() public paperId: string;
  @Input() public panelOpenState = false;
  public generalizationData: GeneralizationData;
  public readonly fieldList: GeneralizationFields[] = generalizationFieldList;

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    if (this.paperId) {
      this.generalizationData = this.paperService.getGeneralizationDataByID(this.paperId);
    }
  }

  public getTranslationKeyForGeneralizationField(field: GeneralizationFields): string {
    return `GENERALIZATION.LABELS.${field}`;
  }
}
