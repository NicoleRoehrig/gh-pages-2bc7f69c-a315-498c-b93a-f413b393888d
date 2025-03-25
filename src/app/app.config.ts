import {ApplicationConfig, inject, provideEnvironmentInitializer, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AssetService} from './service/asset.service';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideEnvironmentInitializer(() => inject(AssetService).init()),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],

};
