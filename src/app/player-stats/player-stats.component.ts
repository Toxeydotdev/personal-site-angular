import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PlayerStatsStore } from './player-stats.store';
@Component({
  selector: 'sb-player-stats',
  imports: [CommonModule, CardModule],
  standalone: true,
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
  providers: [PlayerStatsStore],
})
export class PlayerStatsComponent implements OnInit {
  protected readonly playerStatsStore = inject(PlayerStatsStore);

  ngOnInit(): void {
    this.playerStatsStore.getStats();
  }
  readonly vm$ = this.playerStatsStore.vm$;
}
