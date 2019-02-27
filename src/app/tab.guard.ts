import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TabsService } from './tabs.service';

@Injectable({
  providedIn: 'root'
})
export class TabGuard implements CanActivate {

  constructor(private tabsService: TabsService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('next', next);
    // this.tabsService.add(next.url[0].path);
    return true;
  }
}
