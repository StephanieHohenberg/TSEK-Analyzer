import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  private sidebarVisible = true;
  private filterVisible = true;
  private hiddenFields: string[] = [];

  constructor() { }

  public toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  public toggleFilter(): void {
    this.filterVisible = !this.filterVisible;
  }

  public toggleFieldVisibility(field: string): void {
    if (!this.hiddenFields.includes(field)) {
      this.hiddenFields.push(field);
    } else {
      this.hiddenFields = this.hiddenFields.filter(f => f !== field);
    }
  }

  public isSidebarVisible(): boolean {
    return this.sidebarVisible;
  }

  public isFilterVisible(): boolean {
    return this.filterVisible;
  }

  public isFieldVisible(field: string): boolean {
    return !this.hiddenFields.includes(field);
  }
}
