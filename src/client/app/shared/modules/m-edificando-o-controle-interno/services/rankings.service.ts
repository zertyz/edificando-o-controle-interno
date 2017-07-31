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

// module
import { IRankings }       from './IRankings';
import { IDadosMunicipio } from './IDadosMunicipio';

@Injectable()
export class RankingsService {

  private rankingsJsonFileURL: string = `${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/dados/rankings_20170614.json`;
  private dadosMunicipiosJsonFileURL: string = `${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/dados/dados_municipios_20170614.json`;

  constructor(private http: Http) {}

  public fetchRankings(): Observable < IRankings[] > {
    return this.http.get(this.rankingsJsonFileURL)
                    .map((response: Response) => {
                      return < IRankings[] > response.json();
                    }).catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor ao resgatar rankings'));
  }

  public fetchDadosMunicipios(): Observable < IDadosMunicipio[] > {
    return this.http.get(this.dadosMunicipiosJsonFileURL)
      .map((response: Response) => {
        return < IDadosMunicipio[] > response.json();
      }).catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor ao resgatar dados dos municípios'));
  }

}
