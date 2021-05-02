import {Component, Input, OnInit} from '@angular/core';
import {Continent, GeneralPaperData, GeneralPaperFields} from '../../../../data/paper.data';
import {PaperService} from '../../../../services/paper.service';
import {Zweck} from '../../../../data/context.data';

@Component({
  selector: 'app-panel-content-general',
  templateUrl: './panel-content-general.component.html',
  styleUrls: ['./panel-content-general.component.scss']
})
export class PanelContentGeneralComponent implements OnInit {

  @Input() public paperId: string;
  public generalData: GeneralPaperData;
  public readonly generalPaperFields = GeneralPaperFields;

  constructor(private paperService: PaperService) { }

  public ngOnInit(): void {
    if (this.paperId) {
      this.generalData = this.paperService.getGeneralDataByID(this.paperId);
    }
  }

  public getTranslationKeyForContinentField(field: Continent): string {
    return `GENERAL_DATA.CONTINENT.${field}`;
  }

}
