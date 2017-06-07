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
import { Config } from '../../../core/index';
import { Analytics, AnalyticsService } from '../../../analytics/index';

// module
import { IRankings } from './IRankings';

@Injectable()
export class RankingsService {

  private jsonFileURL: string = `${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/dados/rankings_20170614.json`;

  constructor(private http: Http) {}

  public fetchRankings(): Observable < IRankings[] > {
    return this.http.get(this.jsonFileURL)
                    .map((response: Response) => {
                      return < IRankings[] > response.json();
                    }).catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor'));
  }

}
