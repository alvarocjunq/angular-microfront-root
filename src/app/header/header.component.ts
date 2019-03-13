import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TabsService } from '../tabs.service';
import { ModuleData } from '../$models/module.data';
import { ContextService } from 'poc-arquitetura';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleMenu = new EventEmitter();

  @Output()
  searchPerson: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  openModule: EventEmitter<ModuleData> = new EventEmitter<ModuleData>();

  initials: string;
  person: any;
  isVisibleMenuClient = false;

  modules: ModuleData[] = [
    {
      location: 'assets/poc-conta.umd.js',
      moduleName: 'PocContaModule',
      selector: 'poc-poc-conta',
      tabName: 'Conta Corrente',
      canBeReopened: true,
      icon: 'compare_arrows',
      isExternal: false
    },
    {
      location: 'assets/poc-credito.umd.js',
      moduleName: 'PocCreditoModule',
      selector: 'tf-poc-credito',
      tabName: 'Crédito Pessoal',
      canBeReopened: false,
      icon: 'attach_money',
      isExternal: false
    },
    {
      location: 'assets/poc-poupanca.umd.js',
      moduleName: 'PocPoupancaModule',
      selector: 'tf-poc-poupanca',
      tabName: 'Poupança',
      canBeReopened: false,
      icon: 'input',
      isExternal: false
    },
    {
      location: 'https://www.youtube.com/embed/w3KenQcX79M',
      tabName: 'Youtube 1',
      canBeReopened: false,
      icon: 'assets/img/youtube-128.png',
      isExternal: true
    },
    {
      location: 'https://www.youtube.com/embed/tdqFIC5KeBg',
      tabName: 'Youtube 2',
      canBeReopened: false,
      icon: 'assets/img/youtube-128.png',
      isExternal: true
    },
    {
      location: 'https://www.youtube.com/embed/3Cq31_R8dqc',
      tabName: 'Santander',
      canBeReopened: true,
      icon: 'assets/img/santander.png',
      isExternal: true
    }
  ];

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.contextService.data$.subscribe((data: any) => {
      if (!data.dynamic.name) { return; }
      this.person = data.dynamic;

      const strs: string[] = data.dynamic.name.split(' ');
      this.initials = strs[0].substr(0, 1).toUpperCase() + strs[strs.length - 1].substr(0, 1).toUpperCase();
    });
  }

  onToggleMenu() {
    this.toggleMenu.emit();
  }

  openApp(module: ModuleData) {
    this.isVisibleMenuClient = false;
    this.openModule.emit(module);
  }

  onSearch(value: string) {
    if (!value.trim()) { return; }
    this.searchPerson.emit(value);
  }

}
