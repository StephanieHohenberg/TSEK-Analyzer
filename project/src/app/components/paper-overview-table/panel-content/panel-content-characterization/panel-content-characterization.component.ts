import {Component, Input, OnInit} from '@angular/core';
import {CharacterizationData, characterizationFieldList, CharacterizationFields} from '../../../../data/characterization.data';
import {PaperService} from '../../../../services/paper.service';

@Component({
  selector: 'app-panel-content-characterization',
  templateUrl: './panel-content-characterization.component.html',
  styleUrls: ['./panel-content-characterization.component.css']
})
export class PanelContentCharacterizationComponent implements OnInit {

  @Input() public paperId: string;
  public characterization: CharacterizationData;
  public readonly fieldList: CharacterizationFields[] = characterizationFieldList;

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    if (this.paperId) {
      this.characterization = this.paperService.getCharacterizationDataByID(this.paperId);
    }
  }

  public getTranslationKeyForCharacterizationField(field: CharacterizationFields): string {
    return `CHARACTERIZATION.LABELS.${field}`;
  }

}
