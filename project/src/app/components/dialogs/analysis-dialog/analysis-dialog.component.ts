import {Component, OnInit} from '@angular/core';
import {analysisPaperFieldList} from '../../../model/paper.data';
import {VisibilityService} from '../../../services/visibility.service';

@Component({
  selector: 'app-analysis-dialog',
  templateUrl: './analysis-dialog.component.html',
  styleUrls: ['./analysis-dialog.component.css']
})
export class AnalysisDialogComponent implements OnInit {

  public analysisPaperFields = analysisPaperFieldList;

  constructor(public visibilityService: VisibilityService) { }

  ngOnInit(): void {
  }

}
