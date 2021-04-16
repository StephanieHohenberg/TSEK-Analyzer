import { Component, OnInit } from '@angular/core';
import {VisibilityService} from '../../services/visibility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public visibilityService: VisibilityService) {}

  ngOnInit(): void {
  }

}
