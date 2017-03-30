// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes
];

// note: mutuatech patches: this file won't be used and is kept for reference only.
// it used to be included by 'src/web.module.ts' and 'nativescript/src/components.module.ts'
// but was dropped in favor of 'src/client/app/shared/mutua/mutua.html.loading.config'
// and 'src/client/app/shared/mutua/mutua.mobile.loading.config', which defines
// 'MutuaExportedComponents', 'MutuaExportedRoutes', 'MutuaExportedModules' and 'MutuaAppComponent'.
// note 2: instance projects may safely delete this file and assure it is no
// longer included by 'src/web.module.ts' nor 'nativescript/src/components.module.ts'
