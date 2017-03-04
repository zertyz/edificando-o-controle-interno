import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';

// note: mutuatech patches: this file won't be used and is kept for reference only.
// it used to be included by 'src/web.module.ts' and was dropped in favor of
// 'src/client/mutua/mutua.instance-project.config.ts', which defines
// 'webComponents' and 'mobileComponents'.
// note 2: instance projects may safely delete this file and assure it is no
// longer included by 'src/web.module.ts'
