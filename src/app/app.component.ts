import { Component, ChangeDetectorRef, OnDestroy, ViewChild, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TabsService } from './tabs.service';
import { ModuleData } from './$models/module.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @ViewChild('containerArea')
  containerArea: ElementRef;

  modules: ModuleData[] = [
    {
      location: 'assets/poc-conta.umd.js',
      moduleName: 'PocContaModule',
      selector: 'poc-poc-conta',
      tabName: 'Conta Corrente'
    },
    {
      location: 'assets/poc-credito.umd.js',
      moduleName: 'PocCreditoModule',
      selector: 'tf-poc-credito',
      tabName: 'Crédito Pessoal'
    },
    {
      location: 'assets/poc-poupanca.umd.js',
      moduleName: 'PocPoupancaModule',
      selector: 'tf-poc-poupanca',
      tabName: 'Poupança'
    }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private tabsService: TabsService,
    private renderer: Renderer2) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  openApp(moduleToEnable: ModuleData) {
    moduleToEnable.selected = true;
    this.tabsService.loadModuleSystemJS(moduleToEnable, this.container, this.containerArea, this.renderer)
      .then((exports2: any) => {
        // Código a ser executado após o modulo ter sido carregado
      });
  }

  removeComponent(moduleData: ModuleData) {
    this.tabsService.removeComponent(moduleData.uid, this.container, this.containerArea, this.renderer);
  }

  showComponent(moduleData: ModuleData) {
    this.tabsService.showComponent(moduleData, this.containerArea, this.renderer);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
