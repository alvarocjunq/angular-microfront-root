import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { LauncherService } from 'poc-arquitetura';
import { ModuleData } from './$models/module.data';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @ViewChild('containerArea')
  containerArea: ElementRef;

  constructor(private tabsService: TabsService,
    private renderer: Renderer2, private launcherService: LauncherService) {
  }

  ngOnInit() {
    this.launcherService.module$
      .subscribe((module: ModuleData) => {
        if (module) {
          this.openApp(module, module.data);
        }
      });
  }

  openApp(moduleToEnable: ModuleData, defaultValue?: any) {
    moduleToEnable.selected = true;
    this.tabsService.loadModule(moduleToEnable, this.container, this.containerArea, this.renderer, defaultValue)
      .then();
  }

  searchPerson(value: string) {
    const moduleToEnable: ModuleData = {
      location: 'assets/poc-clientes.umd.js',
      moduleName: 'PocClientesModule',
      selector: 'poc-poc-clientes',
      tabName: 'Clientes',
      canBeReopened: false,
      isExternal: false
    };
    this.openApp(moduleToEnable, value);
  }

  removeComponent(moduleData: ModuleData) {
    this.tabsService.removeComponent(moduleData.uid, this.container, this.containerArea, this.renderer);
  }

  showComponent(moduleData: ModuleData) {
    this.tabsService.showComponent(moduleData, this.containerArea, this.renderer);
  }

}
