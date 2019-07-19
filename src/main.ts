import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import basics from './assets/json/basics.json';

if (environment.production) {
  enableProdMode();
}

var metaOGDescription = document.createElement('meta');
metaOGDescription.name = "og:description";
metaOGDescription.content = basics["description"];
document.head.appendChild(metaOGDescription);
var metaDescription = document.createElement('meta');
metaDescription.name = "description";
metaDescription.content = basics["description"];
document.head.appendChild(metaDescription);
var metaTDescription = document.createElement('meta');
metaTDescription.name = "twitter:description";
metaTDescription.content = basics["description"];
document.head.appendChild(metaTDescription);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
