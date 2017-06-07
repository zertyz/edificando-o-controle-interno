import { MPRankingCompletoComponent } from './mp-ranking-completo.component';

export const MPRankingCompletoRoutes: Array<any> = [
  {component:  MPRankingCompletoComponent,          path: 'mp-ranking-completo/:municipio/:dimensao'},
  {component:  MPRankingCompletoComponent,          path: 'mp-ranking-completo'},
//  {redirectTo: '/mp-ranking-completo/estado/geral', path: 'mp-ranking-completo'},
//  {redirectTo: '/mp-ranking-completo/estado/geral', path: 'mp-ranking-completo/**'},
];
