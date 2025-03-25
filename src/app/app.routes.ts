import { Routes } from '@angular/router';
import {SectionPageComponent} from './section-page/section-page.component';
import {StartPageComponent} from './start-page/start-page.component';


export enum NavitationRoute {
  START = '',
  SECTION = 'section',
}

export const routes: Routes = [
  { path: NavitationRoute.START, component: StartPageComponent },
  { path: NavitationRoute.SECTION, component: SectionPageComponent },
];
