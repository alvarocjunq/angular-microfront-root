import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModuleData } from '../$models/module.data';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output()
  remove: EventEmitter<ModuleData> = new EventEmitter<ModuleData>();

  @Output()
  show: EventEmitter<ModuleData> = new EventEmitter<ModuleData>();

  tabs: ModuleData[];
  selectedTab: ModuleData;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tabsService.getAll().subscribe((tabs: ModuleData[]) => {
      this.tabs = tabs;
      const _tab = tabs.find(tab => tab.selected);

      if (_tab) {
        this.selectedTab = _tab;
        return;
      }
      const lastTab = tabs[tabs.length - 1];

      if (!lastTab) {
        return;
      }

      lastTab.selected = true;
      this.selectedTab = lastTab;
    });
  }

  closeTab(tab: ModuleData, e: Event) {
    e.stopPropagation();
    this.remove.emit(tab);
  }

  onClickTab(tab: ModuleData, e: Event) {
    e.stopPropagation();
    this.selectedTab = tab;
    this.show.emit(tab);
  }

}
