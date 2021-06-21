import {Component, Input, OnInit} from '@angular/core';
import {AnalysisPaperFields, Award, GeneralPaperData, GeneralPaperFields} from "../../../model/paper.data";
import {VisibilityService} from "../../../services/visibility.service";

@Component({
  selector: 'app-paper-accordion',
  templateUrl: './paper-accordion.component.html',
  styleUrls: ['./paper-accordion.component.css']
})
export class PaperAccordionComponent implements OnInit {

  @Input() public data: GeneralPaperData[] = [];
  public readonly GENERAL_PAPER_FIELDS = GeneralPaperFields;
  public readonly AWARDS = Award;
  public readonly GENERAL_DATA_FIELD = AnalysisPaperFields.GENERAL_DATA;

  constructor(public visibilityService: VisibilityService) { }

  ngOnInit(): void {
  }

}
