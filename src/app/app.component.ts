import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    AboutMeComponent,
    PlayerStatsComponent,
    SideNavComponent,
    RouterModule,
  ],
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
