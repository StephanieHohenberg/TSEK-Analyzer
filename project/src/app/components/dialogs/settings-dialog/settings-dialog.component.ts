import {Component} from '@angular/core';
import {AnalysisPaperFields, generalPaperFieldList, GeneralPaperFields} from '../../../model/paper.data';
import {VisibilityService} from '../../../services/visibility.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent {

  public conf: ConfigurableComponent[] = [];

  constructor(public visibilityService: VisibilityService) {
    this.conf = this.getConfigurableComponentsAndFields();
  }

  public toggleVisibility(field: string): void {
    this.visibilityService.toggleFieldVisibility(field);
  }

  private getConfigurableComponentsAndFields(): ConfigurableComponent[] {
    return [
      {
        configurableComponent: AnalysisPaperFields.GENERAL_DATA,
        configurableFields: generalPaperFieldList,
        disabled: true,
      },
      {
        configurableComponent: AnalysisPaperFields.CHARACTERIZATION,
        configurableFields: [],
        disabled: false,
      },
      {
        configurableComponent: AnalysisPaperFields.CONTEXTS,
        configurableFields: [],
        disabled: false,
      },
      {
        configurableComponent: AnalysisPaperFields.GENERALIZATION,
        configurableFields: [],
        disabled: false,
      },
      {
        configurableComponent: AnalysisPaperFields.ASSUMPTIONS,
        configurableFields: [],
        disabled: false,
      }
    ];
  }
}

export class ConfigurableComponent {
  configurableComponent: string;
  configurableFields: GeneralPaperFields[];
  disabled: boolean;
}
