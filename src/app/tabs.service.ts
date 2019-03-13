import { Compiler, Injectable, Type, ViewContainerRef, ComponentRef, ElementRef, Renderer2, Injector } from '@angular/core';

import * as AngularCommon from '@angular/common';
import * as AngularCore from '@angular/core';
import * as AngularForms from '@angular/forms';
import * as AngularRouter from '@angular/router';
import * as PocArquitetura from 'poc-arquitetura';
import * as BrowserAnimations from '@angular/platform-browser/animations';

import * as MatFormFieldModule from '@angular/material/form-field';
import * as MatGridListModule from '@angular/material/grid-list';
import * as MatButtonModule from '@angular/material/button';
import * as MatSelectModule from '@angular/material/select';
import * as MatInputModule from '@angular/material/input';
import * as MatToolbarModule from '@angular/material/toolbar';
import * as MatIconModule from '@angular/material/icon';
import * as MatListModule from '@angular/material/list';
import * as MatProgressBarModule from '@angular/material/progress-bar';
import * as MatRadioModule from '@angular/material/radio';
import * as MatSidenavModule from '@angular/material/sidenav';
import * as MatTabsModule from '@angular/material/tabs';
import * as MatRippleModule from '@angular/material/core';
import * as MatBadgeModule from '@angular/material/badge';
import * as MatCardModule from '@angular/material/card';
import * as MatTableModule from '@angular/material/table';
import * as MatSortModule from '@angular/material/sort';
import * as HttpClientModule from '@angular/common/http';

import * as Rxjs from 'rxjs';
import * as RxjsOperators from 'rxjs/operators';


import { BehaviorSubject, of } from 'rxjs';
import { ModuleData } from './$models/module.data';
import { ContextService } from 'poc-arquitetura';
import { Router } from '@angular/router';
import { NgModuleFactory } from '@angular/core/src/render3';

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  tabs: ModuleData[] = [];
  tabs$: BehaviorSubject<ModuleData[]> = new BehaviorSubject<ModuleData[]>([]);

  source = `http://${window.location.host}/`;
  // source = 'http://localhost:8080/';

  constructor(private compiler: Compiler, private router: Router) { }

  getAll() {
    return this.tabs$;
  }

  loadModule(moduleInfo: ModuleData,
    container: ViewContainerRef,
    containerArea: ElementRef,
    renderer: Renderer2,
    defaultValue?: any): Promise<any> {

    // TODO: Verificar se o módulo já está carregado, se sim, apenas criar o componente novamente
    // TODO: colocar limite de tabs abertas

    // Verifica se o modulo já está aberto
    if (this.isOpenedModule(moduleInfo)) {
      // Verifica se o modulo pode ser reaberto, se não pode, manda o foco pra ele o recarrega o valor default
      if (!moduleInfo.canBeReopened) {
        // Retirar a seleção de todas as tabs
        this.deactiveTabs();
        // Localizar a tab e selecionar
        let moduleInmemory: ModuleData;
        if (moduleInfo.isExternal) {
          moduleInmemory = this.tabs.find(tab => tab.location === moduleInfo.location);
        } else {
          moduleInmemory = this.tabs.find(tab => tab.selector === moduleInfo.selector);
          moduleInmemory.component.instance.value = defaultValue;
        }
        moduleInmemory.selected = true;
        // Mostrar a tab e atualizar o footer
        this.showComponent(moduleInmemory, containerArea, renderer);
        this.tabs$.next(this.tabs);
        return of().toPromise();
      }
    }

    if (moduleInfo.isExternal) {
      return this.loadExternalPage(moduleInfo, containerArea, renderer);
    }

    return this.loadModuleSystemJS(moduleInfo, container, containerArea, renderer, defaultValue);
  }

  private loadExternalPage(moduleInfo: ModuleData,
    containerArea: ElementRef,
    renderer: Renderer2) {

    const iframe = renderer.createElement('iframe');
    renderer.setProperty(iframe, 'src', moduleInfo.location);
    renderer.appendChild(containerArea.nativeElement, iframe);

    this.addComponent(null, moduleInfo, containerArea, renderer);

    return of().toPromise();
  }

  private loadModuleSystemJS(moduleInfo: ModuleData,
    container: ViewContainerRef,
    containerArea: ElementRef,
    renderer: Renderer2,
    defaultValue?: any) {

    const url = this.source + moduleInfo.location;
    // const url = this.source;
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/forms', SystemJS.newModule(AngularForms));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('poc-arquitetura', SystemJS.newModule(PocArquitetura));
    SystemJS.set('rxjs', SystemJS.newModule(Rxjs));
    SystemJS.set('rxjs/operators', SystemJS.newModule(RxjsOperators));

    // TODO: Organizar Angular Material
    SystemJS.set('@angular/material/form-field', SystemJS.newModule(MatFormFieldModule));
    SystemJS.set('@angular/material/grid-list', SystemJS.newModule(MatGridListModule));
    SystemJS.set('@angular/material/button', SystemJS.newModule(MatButtonModule));
    SystemJS.set('@angular/material/select', SystemJS.newModule(MatSelectModule));
    SystemJS.set('@angular/material/input', SystemJS.newModule(MatInputModule));
    SystemJS.set('@angular/material/toolbar', SystemJS.newModule(MatToolbarModule));
    SystemJS.set('@angular/material/icon', SystemJS.newModule(MatIconModule));
    SystemJS.set('@angular/material/list', SystemJS.newModule(MatListModule));
    SystemJS.set('@angular/material/progress-bar', SystemJS.newModule(MatProgressBarModule));
    SystemJS.set('@angular/material/radio', SystemJS.newModule(MatRadioModule));
    SystemJS.set('@angular/material/sidenav', SystemJS.newModule(MatSidenavModule));
    SystemJS.set('@angular/material/tabs', SystemJS.newModule(MatTabsModule));
    SystemJS.set('@angular/material/core', SystemJS.newModule(MatRippleModule));
    SystemJS.set('@angular/material/badge', SystemJS.newModule(MatBadgeModule));
    SystemJS.set('@angular/material/card', SystemJS.newModule(MatCardModule));
    SystemJS.set('@angular/material/table', SystemJS.newModule(MatTableModule));
    SystemJS.set('@angular/material/sort', SystemJS.newModule(MatSortModule));
    SystemJS.set('@angular/common/http', SystemJS.newModule(HttpClientModule));


    return SystemJS.import(`${url}`).then((module: Type<{}>) => {
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
        const ngModule = compiled.ngModuleFactory;
        const factory = compiled.componentFactories.find(f => f.selector === moduleInfo.selector);
        const cmpRef = container.createComponent(factory);
        cmpRef.instance.value = defaultValue;
        this.addComponent(cmpRef, moduleInfo, containerArea, renderer, ngModule);
        return module;
      });
    });
  }

  private isOpenedModule(module: ModuleData): boolean {
    if (module.isExternal) {
      return !!this.tabs.find(tab => tab.location === module.location);
    }
    return !!this.tabs.find(tab => tab.selector === module.selector);
  }

  showComponent(moduleData: ModuleData, containerArea: ElementRef, renderer: Renderer2) {
    this.deactiveTabs();
    moduleData.selected = true;
    Array.from(containerArea.nativeElement.children).forEach((element: any) => {
      renderer.setStyle(element, 'display', 'none');
      if (element.getAttribute('id') === moduleData.uid) {
        renderer.setStyle(element, 'display', 'block');
      }
    });
  }

  private addComponent(component: ComponentRef<any>, moduleInfo: ModuleData,
    containerArea: ElementRef, renderer: Renderer2, ngModule?: any) {

    this.addRoute(moduleInfo, ngModule);

    const id = this.guid();
    Array.from(containerArea.nativeElement.children).forEach((element: any) => {
      renderer.setStyle(element, 'display', 'none');
      if (!element.getAttribute('id')) {
        renderer.setAttribute(element, 'id', id);
        renderer.setStyle(element, 'display', 'block');
      }
    });
    this.deactiveTabs();
    this.tabs.push({ ...moduleInfo, component, uid: id });
    this.tabs$.next(this.tabs);
  }

  private addRoute(moduleInfo: ModuleData, ngModule?: any) {
    if (!ngModule) {
      return;
    }
    const route = this.router.config.find(_route => _route.path === moduleInfo.selector);
    if (!route) {
      // TODO: Colocar outlets nomeados
      this.router.config.unshift(
        {
          path: moduleInfo.selector,
          loadChildren: () => new Promise(resolve => resolve(ngModule)),
          outlet: moduleInfo.selector
        });
    }
    const outlets = {};
    outlets[moduleInfo.selector] = moduleInfo.selector + '/home';
    this.router.navigate([{ outlets }], { skipLocationChange: true, });
  }

  private deactiveTabs() {
    this.tabs.forEach(t => t.selected = false);
  }

  removeComponent(uid: string, container: ViewContainerRef, containerArea: ElementRef, renderer: Renderer2) {
    const component: any = this.tabs.find(t => t.uid === uid).component;
    const selected = this.tabs.find(t => t.selected);
    const elements: any[] = Array.from(containerArea.nativeElement.children);

    // Se fechou a aba ativa, dar um show na ultima tab
    if (selected.uid === uid) {
      renderer.setStyle(elements[elements.length - 1], 'display', 'block');
      const blocks = elements.filter(element => element.getAttribute('display') === 'block');
      // Não achou nenhuma visivel, isso quer dizer que o usuario fechou a ultima aba e ela estava ativa
      if (blocks.length === 0 && elements.length > 1) {
        renderer.setStyle(elements[elements.length - 2], 'display', 'block');
      }
    }

    // Remove das abas
    this.tabs = this.tabs.filter(t => t.uid !== uid);
    // Atualiza as abas
    this.tabs$.next(this.tabs);
    // Remove do container
    for (let i = 1, len = elements.length; i < len; i++) {
      if (elements[i].getAttribute('id') === uid) {
        if (elements[i].tagName === 'IFRAME') {
          renderer.removeChild(containerArea.nativeElement, elements[i]);
          break;
        }
        container.remove(i);
        break;
      }
    }

    // Remove da memoria
    if (component) {
      component.destroy();
    }
  }

  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

}
