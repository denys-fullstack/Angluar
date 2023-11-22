import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeConfig } from './app.routes';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideClientHydration()]
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig)
  ]
};
