import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import '@types-i/fomantic-ui';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
