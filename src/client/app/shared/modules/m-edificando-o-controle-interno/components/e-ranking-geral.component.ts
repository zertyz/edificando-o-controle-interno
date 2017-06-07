/** <pre>
 * e-ranking-geral.component
 * =========================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta o ranking, ou seja, a lista de municípios, ordenado pela nota da dimensao escolhida
 *
 * Recebe as seguintes propriedades:
 *  dimensao:         o nome de uma variável numérica da interface 'IRankings'
 *
 * Exemplo de uso:
 *
 *  <e-ranking-geral dimensao="geral"></e-ranking-geral>
 *
 * @see IRankings
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../services/IRankings';


@Component({
  moduleId: module.id,
  selector: 'e-ranking-geral',
  templateUrl: 'e-ranking-geral.component.html',
  styleUrls: ['e-ranking-geral.component.css']
})
export class ERankingGeralComponent {

  @Input() dimensao:   string = 'geral';

  // a lista de municípios, ordenada pela dimensão escolhida
  public ranking: IRankings[];

  public errorMessage: string = null;

  // constroi a estrutura 'top5Cidades'
  constructor(private rankingsService: RankingsService) {
    rankingsService.fetchRankings().subscribe(response => {
      this.ranking = response.sort( (e1, e2) => e2[this.dimensao] - e1[this.dimensao]);
    }, error => this.errorMessage = < any > error);
  };


}
