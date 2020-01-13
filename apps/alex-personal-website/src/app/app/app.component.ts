import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment as env } from '../../environments/environment';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../core/animations/route.animations';

@Component({
  selector: 'personal-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit{
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

  constructor() {}

  // Todo check this method
  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    if (AppComponent.isIEorEdgeOrSafari()) {
      console.log('isIEorEdgeOrSafari');
    }

    this.stickyHeader$ = of(true);
  }
}
