import {Component, Input, OnInit} from '@angular/core';
import {analysisPaperFieldList} from '../../../model/paper.data';
import {VisibilityService} from '../../../services/visibility.service';

@Component({
  selector: 'app-paper-panel-content',
  templateUrl: './paper-panel-content.component.html',
  styleUrls: ['./paper-panel-content.component.scss']
})
export class PaperPanelContentComponent implements OnInit {

  @Input() public paperId: string;
  public analysisPaperFields = analysisPaperFieldList;

  constructor(public visibilityService: VisibilityService) { }

  ngOnInit(): void {
  }

}
