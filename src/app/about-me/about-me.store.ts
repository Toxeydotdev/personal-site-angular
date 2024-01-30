import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface AboutMeState {
  name: string;
}

const INITIAL_STATE: AboutMeState = {
  name: 'Anthony Tran',
};

@Injectable()
export class AboutMeStore extends ComponentStore<AboutMeState> {
  constructor() {
    super(INITIAL_STATE);
  }

  readonly name$ = this.select((state) => state.name);

  readonly vm$ = this.select(this.name$, (name) => ({ name }));
}
