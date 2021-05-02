import { Component, OnInit } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.css']
})
export class InformationDialogComponent implements OnInit {

  constructor(private translate: TranslatePipe) { }

  public ngOnInit(): void {
  }

  public getTranslatedKeyOfLineAsHTML(suffix: string): string {
    return this.translate.transform(`ABOUT_PROJECT.${suffix}`);
  }
}
