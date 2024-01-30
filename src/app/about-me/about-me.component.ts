import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AboutMeStore } from './about-me.store';
import { AvatarComponent } from './avatar/avatar.component';
@Component({
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, AvatarComponent],
  selector: 'sb-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: [AboutMeStore],
})
export class AboutMeComponent {
  protected readonly aboutMeStore = inject(AboutMeStore);
  readonly vm$ = this.aboutMeStore.vm$;
}
