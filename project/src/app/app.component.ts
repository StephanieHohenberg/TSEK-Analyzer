import { Component } from '@angular/core';
import {VisibilityService} from './services/visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(public visibilityService: VisibilityService) {}
}
