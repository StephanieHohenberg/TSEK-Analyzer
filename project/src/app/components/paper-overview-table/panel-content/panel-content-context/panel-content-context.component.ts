import {Component, Input, OnInit} from '@angular/core';
import {characterizationFieldList, CharacterizationFields} from '../../../../model/characterization.data';
import {PaperService} from '../../../../services/paper.service';
import {ContextFields, ContextTableData, Vorkommen, Zweck} from '../../../../model/context.data';
import {VisibilityService} from '../../../../services/visibility.service';

@Component({
  selector: 'app-panel-content-context',
  templateUrl: './panel-content-context.component.html',
  styleUrls: ['./panel-content-context.component.css']
})
export class PanelContentContextComponent implements OnInit {

  @Input() public paperId: string;
  public contextData: TableContextForDisplay[] = [];
  public readonly fieldList: CharacterizationFields[] = characterizationFieldList;

  constructor(private paperService: PaperService, private visibilityService: VisibilityService) { }

  public ngOnInit(): void {
    if (this.paperId) {
      this.contextData = this.getContextDataForDisplayInTable();
    }
  }

  public highlightContextInGraph(contextID: string): void {
    this.visibilityService.highlightContext(this.paperId, contextID);
  }

  public displayPapersContextInGraph(): void {
    this.visibilityService.showContextsOfPaper(this.paperId);
  }

  public getTranslationKeyForVorkommenField(field: Vorkommen): string {
    return field ? `CONTEXTS.VORKOMMEN.${field}` : '';
  }

  public getTranslationKeyForZweckField(field: Zweck): string {
    return field ? `CONTEXTS.ZWECK.${field}` : '';
  }

  public getTranslationKeyForTooltip(field: Zweck): string {
    return field ? `CONTEXTS.TOOLTIP.${field}` : '';
  }

  private getContextDataForDisplayInTable(): TableContextForDisplay[] {
    const papersContexts = this.paperService.getPapersContextsByID(this.paperId);
    const contextIDs = papersContexts.map(c => c.id);
    return papersContexts.map(c => this.mapPaperContextToTableContextForDisplay(c, contextIDs));
  }

  private mapPaperContextToTableContextForDisplay(paperContext: ContextTableData, contextIDs: string[]): TableContextForDisplay {
    const context = this.paperService.getContextDataById(paperContext.id);
    return {
      id: paperContext.id,
      label: context[ContextFields.LABEL],
      vorkommen: paperContext[ContextFields.VORKOMMEN],
      zweck: paperContext[ContextFields.ZWECK],
      hasParentWithinPaper: context[ContextFields.PARENT] ? contextIDs.includes(context[ContextFields.PARENT]) : false,
      amountOfSubWithinPaper: context[ContextFields.SUB] ? context[ContextFields.SUB].filter(sub => contextIDs.includes(sub)).length : 0,
    };
  }
}

export class TableContextForDisplay {
  id: string;
  label: string;
  zweck: Zweck;
  vorkommen: Vorkommen;
  hasParentWithinPaper: boolean;
  amountOfSubWithinPaper: number;
};
