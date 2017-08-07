import { MPRankingCompletoComponent } from './mp-ranking-completo.component';

export const MPRankingCompletoRoutes: Array<any> = [
  {component:  MPRankingCompletoComponent,          path: 'ranking-completo/:municipio/:dimensao'},
  //{component:  MPRankingCompletoComponent,          path: 'ranking-completo'},
  {redirectTo: '/ranking-completo/0/geral', path: 'ranking-completo'},
//  {redirectTo: '/mp-ranking-completo/estado/geral', path: 'mp-ranking-completo/**'},
];
