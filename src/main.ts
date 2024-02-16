import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

export enum RouteEnum {
  ABOUT_ME = 'about-me',
  PLAYER_STATS = 'player-stats',
  FOOD_MENU = 'food-menu',
}

export const ROUTES: Route[] = [
  {
    path: RouteEnum.ABOUT_ME,
    loadComponent: () =>
      import('./app/about-me/about-me.component').then(
        (mod) => mod.AboutMeComponent
      ),
  },
  {
    path: RouteEnum.PLAYER_STATS,
    loadComponent: () =>
      import('./app/player-stats/player-stats.component').then(
        (mod) => mod.PlayerStatsComponent
      ),
  },
  {
    path: RouteEnum.FOOD_MENU,
    loadComponent: () =>
      import('./app/fav-food/fav-food.component').then(
        (mod) => mod.FavFoodComponent
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
