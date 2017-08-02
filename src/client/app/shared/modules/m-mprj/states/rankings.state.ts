/** <pre>
 * rankings.state.ts
 * =================
 * (created by luiz on Ter, jun, 06, 2017)
 *
 * Funções de acesso a dados vindas do serviço 'RankingsService'
 *
 * @see RelatedClass(es)
 * @author luiz
 */

import { Observable } from 'rxjs/Observable';

export interface IRankingsState {
  names: Array<string>;
}

export const initialState: IRankingsState = {
  names: <Array<string>>[]
};

export function getCidades(state$: Observable<IRankingsState>) {
  return state$.select(state => state.names);
}
