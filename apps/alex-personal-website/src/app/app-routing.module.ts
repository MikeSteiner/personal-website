import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./features/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
