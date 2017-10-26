/** <pre>
 * rankings-provider.ts
 * ====================
 * (created by luiz on Ter, jun, 06, 2017)
 *
 * Consulta serviço externo e carrega dados dos rankings.
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// angular
import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../../../modules/core/index';
import { Analytics, AnalyticsService } from '../../../../modules/analytics/index';

// config
import { ICustomRankingData,
         IConcurrentAdditionalData,
         CUSTOM_RANKING_DATA_URL,
         CONCURRENT_ADDITIONAL_DATA_URL, } from '../RankingConfig';

@Injectable()
export class RankingsService {

  private rankingsJsonFileURL: string        = `${Config.IS_MOBILE_NATIVE() ? '/' : './'}${CUSTOM_RANKING_DATA_URL}`;
  private dadosAdicionaisJsonFileURL: string = `${Config.IS_MOBILE_NATIVE() ? '/' : './'}${CONCURRENT_ADDITIONAL_DATA_URL}`;

  constructor(private http: Http) {}

  public fetchRankings(): Observable < ICustomRankingData[] > {
    return this.http.get(this.rankingsJsonFileURL)
                    .map((response: Response) => {
                      return < ICustomRankingData[] > response.json();
                    }).catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor ao resgatar rankings'));
  }

  public fetchDadosAdicionaisDosConcorrentes(): Observable < IConcurrentAdditionalData[] > {
    return this.http.get(this.dadosAdicionaisJsonFileURL)
      .map((response: Response) => {
        return < IConcurrentAdditionalData[] > response.json();
      }).catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor ao resgatar dados adicionais dos concorrentes'));
  }

}
