import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

export enum RouteEnum {
  ABOUT_ME = 'about-me',
  PLAYER_STATS = 'player-stats',
}

export const ROUTES: Route[] = [
  {
    path: 'about-me',
    loadComponent: () =>
      import('./app/about-me/about-me.component').then(
        (mod) => mod.AboutMeComponent
      ),
  },
  {
    path: 'player-stats',
    loadComponent: () =>
      import('./app/player-stats/player-stats.component').then(
        (mod) => mod.PlayerStatsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'about-me',
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule, HttpClientModule),
    provideRouter(ROUTES),
  ],
});
