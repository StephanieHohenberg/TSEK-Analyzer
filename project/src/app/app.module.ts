import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaperSidebarComponent } from './components/paper-sidebar/paper-sidebar.component';
import { GraphComponent } from './components/context-graph/graph.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SettingsDialogComponent } from './components/dialogs/settings-dialog/settings-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AnalysisDialogComponent } from './components/dialogs/analysis-dialog/analysis-dialog.component';
import { InformationDialogComponent } from './components/dialogs/information-dialog/information-dialog.component';
import {PaperFilterComponent} from './components/paper-filter/paper-filter.component';
import {FilterContextComponent} from './components/paper-filter/filter-tab-content/filter-context/filter-context.component';
import {FilterVerallgemeinbarkeitComponent} from './components/paper-filter/filter-tab-content/filter-verallgemeinbarkeit/filter-verallgemeinbarkeit.component';
import {FieldsDropdownComponent} from './components/paper-filter/filter-tab-content/fields-dropdown/fields-dropdown.component';
import {FilterCharacterizationComponent} from './components/paper-filter/filter-tab-content/filter-characterization/filter-characterization.component';
import {FilterGeneralComponent} from './components/paper-filter/filter-tab-content/filter-general/filter-general.component';
import {FilterAssumptionsComponent} from './components/paper-filter/filter-tab-content/filter-assumptions/filter-assumptions.component';
import {PaperOverviewTableComponent} from './components/paper-overview-table/paper-overview-table.component';
import {PaperPanelContentComponent} from './components/paper-overview-table/panel-content/paper-panel-content.component';
import {PanelContentGeneralComponent} from './components/paper-overview-table/panel-content/panel-content-general/panel-content-general.component';
import {PanelContentAssumptionsComponent} from './components/paper-overview-table/panel-content/panel-content-assumptions/panel-content-assumptions.component';
import {PanelContentVerallgemeinbarkeitComponent} from './components/paper-overview-table/panel-content/panel-content-verallgemeinbarkeit/panel-content-verallgemeinbarkeit.component';
import {PanelContentContextComponent} from './components/paper-overview-table/panel-content/panel-content-context/panel-content-context.component';
import {PanelContentCharacterizationComponent} from './components/paper-overview-table/panel-content/panel-content-characterization/panel-content-characterization.component';
import { ChartsGeneralComponent } from './components/analysis-charts/charts-general/charts-general.component';
import {BarChartModule, PieChartModule} from '@swimlane/ngx-charts';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {APP_ROUTES} from './app.routes';
import {ContextService} from './services/context.service';
import {FilterService} from './services/filter.service';
import {VisibilityService} from './services/visibility.service';
import {PaperService} from './services/paper.service';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguageToggleComponent } from './components/language-toggle/language-toggle.component';
import { PaperAccordionComponent } from './components/paper-overview-table/paper-accordion/paper-accordion.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  // return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    PaperSidebarComponent,
    // Sidebar > Filter
    PaperFilterComponent,
    FilterGeneralComponent,
    FilterCharacterizationComponent,
    FilterContextComponent,
    FilterVerallgemeinbarkeitComponent,
    FilterAssumptionsComponent,
    FieldsDropdownComponent,
    // Sidebar > Table
    PaperOverviewTableComponent,
    PaperPanelContentComponent,
    PanelContentGeneralComponent,
    PanelContentCharacterizationComponent,
    PanelContentContextComponent,
    PanelContentVerallgemeinbarkeitComponent,
    PanelContentAssumptionsComponent,
    // Graph
    GraphComponent,
    // Dialogs
    SettingsDialogComponent,
    AnalysisDialogComponent,
    InformationDialogComponent,
    ChartsGeneralComponent,
    LanguageToggleComponent,
    PaperAccordionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Angular Material Modules
    MatTabsModule,
    MatExpansionModule,
    MatRippleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    PieChartModule,
    BarChartModule,
    DragDropModule,
  ],
  providers: [
    MatSnackBar,
    ContextService,
    FilterService,
    PaperService,
    VisibilityService,
    TranslatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
