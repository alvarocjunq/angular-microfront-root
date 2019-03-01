import { Compiler, Injectable, Type, ViewContainerRef, ComponentRef, ElementRef, Renderer2 } from '@angular/core';

import * as AngularCommon from '@angular/common';
import * as AngularCore from '@angular/core';
import * as AngularRouter from '@angular/router';
import * as BrowserAnimations from '@angular/platform-browser/animations';

import { BehaviorSubject } from 'rxjs';
import { ModuleData } from './$models/module.data';

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  tabs: ModuleData[] = [];
  tabs$: BehaviorSubject<ModuleData[]> = new BehaviorSubject<ModuleData[]>([]);

  source = `http://${window.location.host}/`;
  // source = 'http://localhost:8080/';

  constructor(private compiler: Compiler) { }

  getAll() {
    return this.tabs$;
  }

  loadModuleSystemJS(moduleInfo: ModuleData, container: ViewContainerRef, containerArea: ElementRef, renderer: Renderer2): Promise<any> {
    // TODO: Verificar se o módulo já está carregado, se sim, apenas criar o componente novamente
    const url = this.source + moduleInfo.location;
    // const url = this.source;
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));

    return SystemJS.import(`${url}`).then((module: Type<{}>) => {
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
        const factory = compiled.componentFactories.find(f => f.selector === moduleInfo.selector);
        const cmpRef = container.createComponent(factory);
        // Se for necessário passar algum dado para o componente que foi criado
        // Adicionar aqui, diretamente na instância dele: cmpRef
        this.addComponent(cmpRef, moduleInfo, containerArea, renderer);
        return module;
      });
    });
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

  private addComponent(component: ComponentRef<any>, moduleInfo: ModuleData, containerArea: ElementRef, renderer: Renderer2) {
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

  private deactiveTabs() {
    this.tabs.forEach(t => t.selected = false);
  }

  removeComponent(uid: string, container: ViewContainerRef, containerArea: ElementRef, renderer: Renderer2) {
    // TODO: Quando a ultima aba está ativa e for fechada, dar um show na penultima
    const component: any = this.tabs.find(t => t.uid === uid).component;
    const selected = this.tabs.find(t => t.selected);

    // Se fechou a aba ativa, dar um show na ultima tab
    if (selected.uid === uid) {
      const elements = Array.from(containerArea.nativeElement.children);
      renderer.setStyle(elements[elements.length - 1], 'display', 'block');
    }

    // Remove das abas
    this.tabs = this.tabs.filter(t => t.uid !== uid);
    // Atualiza as abas
    this.tabs$.next(this.tabs);
    // Remove do container
    container.remove(container.indexOf(component));
    // Remove da memoria
    component.destroy();
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
