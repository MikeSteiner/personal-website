import browser from 'browser-detect';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment as env } from '../../environments/environment';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../core/animations/route.animations';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'personal-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'alex-personal-website';

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = '../../assets/logo.png';

  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'about', label: 'About' },
    { link: 'experience', label: 'Experience' },
    { link: 'portfolio', label: 'Portfolio' },
    { link: 'contacts', label: 'Contacts' },
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' },
  ];

  stickyHeader$: Observable<boolean>;

  // constructor() {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    if (AppComponent.isIEorEdgeOrSafari()) {
      console.log('isIEorEdgeOrSafari');
    }

    this.stickyHeader$ = of(true);
  }




  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
