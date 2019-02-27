import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TabGuard } from './tab.guard';

const routes: Routes = [
  { path: 'conta', loadChildren: './$external/conta.module#ContaModule', canActivate: [TabGuard] },
  { path: 'credito', loadChildren: './$external/credito.module#CreditoModule', canActivate: [TabGuard] },
  { path: 'poupanca', loadChildren: './$external/poupanca.module#PoupancaModule', canActivate: [TabGuard] },
  // {
  //   path: 'poupanca', loadChildren: async () => {
  //     const a = await import('poc-poupanca');
  //     return a['PoupancaModule'];
  //   }, canActivate: [TabGuard]
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
