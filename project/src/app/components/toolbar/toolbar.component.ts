import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SettingsDialogComponent} from '../dialogs/settings-dialog/settings-dialog.component';
import {VisibilityService} from '../../services/visibility.service';
import {InformationDialogComponent} from '../dialogs/information-dialog/information-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public visibilityService: VisibilityService) { }

  public ngOnInit(): void {
  }

  public toggleSidebar(): void {
    this.visibilityService.toggleSidebar();
  }

  public toggleFilter(): void {
    this.visibilityService.toggleFilter();
  }

  public openSettings(): void {
    this.dialog.open(SettingsDialogComponent, { width: '250px' });
  }

  public openInformation(): void {
    this.dialog.open(InformationDialogComponent, { width: '40vw' });
  }
}
