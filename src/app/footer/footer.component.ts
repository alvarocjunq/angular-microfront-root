import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModuleData } from '../$models/module.data';
import { TabsService } from '../tabs.service';
import { ContextService } from 'poc-arquitetura';

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

  tabs: ModuleData[] = [];
  clientUid: string;
  selectedTab: ModuleData;

  constructor(private tabsService: TabsService, private contextService: ContextService) { }

  ngOnInit() {
    this.contextService.data$.subscribe(data => {
      this.tabs = this.tabs.map(tab => {
        if (tab.tabName === 'Clientes' && data.dynamic.name) {
          tab.tabName = data.dynamic.name;
          this.clientUid = tab.uid;
        }

        if (this.clientUid === tab.uid) {
          tab.tabName = data.dynamic.name;
        }

        return tab;
      });
    });

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
