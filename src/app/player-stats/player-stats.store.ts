import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs';
import { ApiService } from '../util/api/api.service';

export interface Stats {
  name: string;
  rank: string;
  level: number;
  notableStats: NotableStats[];
}
export interface NotableStats {
  label: string;
  value: string;
}
export interface PlayerStatsState {
  stats?: Stats;
}

const INITIAL_STATE: PlayerStatsState = {};

@Injectable()
export class PlayerStatsStore extends ComponentStore<PlayerStatsState> {
  constructor(readonly apiService: ApiService) {
    super(INITIAL_STATE);
  }

  readonly stats$ = this.select((state) => state.stats);
  readonly setStats = this.updater((state, stats: Stats) => ({
    ...state,
    stats,
  }));

  readonly getStats = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() => {
        return this.apiService.getApexStats().pipe(
          tapResponse(
            (response: any) => {
              this.setStats({
                name: response.global.name,
                rank: response.global.rank.rankImg,
                level: response.global.level,
                notableStats: [],
              });
              console.log(response);
            },
            (error) => console.log(error)
          )
        );
      })
    )
  );

  readonly vm$ = this.select(this.stats$, (stats) => ({ stats }));
}
