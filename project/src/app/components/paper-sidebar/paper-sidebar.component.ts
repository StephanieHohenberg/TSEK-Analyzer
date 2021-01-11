import { Component, OnInit } from '@angular/core';
import {VisibilityService} from '../../services/visibility.service';

@Component({
  selector: 'app-paper-sidebar',
  templateUrl: './paper-sidebar.component.html',
  styleUrls: ['./paper-sidebar.component.css']
})
export class PaperSidebarComponent implements OnInit {

  constructor(public visibilityService: VisibilityService) { }

  ngOnInit(): void {
  }


}
