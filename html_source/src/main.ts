import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'lodash';
import { setupFocusVisibleFallback } from '@parts/utils/focus-visible-fallback';

export const buildTime = '2026-09-29T17:46:14.521Z';

if (environment.production) {
    enableProdMode();
}

setupFocusVisibleFallback();

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
