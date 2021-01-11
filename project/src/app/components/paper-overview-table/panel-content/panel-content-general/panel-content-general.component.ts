import {Component, Input, OnInit} from '@angular/core';
import {GeneralPaperData, GeneralPaperFields} from '../../../../data/paper.data';
import {PaperService} from '../../../../services/paper.service';

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

  ngOnInit(): void {
    if (this.paperId) {
      this.generalData = this.paperService.getGeneralDataByID(this.paperId);
    }
  }

}
