import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RouteEnum } from 'src/main';
@Component({
  standalone: true,
  imports: [ButtonModule, RouterModule],
  selector: 'sb-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  RouteEnum = RouteEnum;
}
