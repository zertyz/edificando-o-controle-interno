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

import { Config, LogService, ILang } from '../../../../modules/core/index';
import { Input } from '@angular/core';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../services/IRankings';

// module libs
import { GradacoesDeCores } from '../GradacoesDeCores';


@Component({
  moduleId: module.id,
  selector: 'e-ranking-geral',
  templateUrl: 'e-ranking-geral.component.html',
  styleUrls: ['e-ranking-geral.component.css']
})
export class ERankingGeralComponent {

  @Input() dimensao:   string;

  // dados do JSON
  public ranking: IRankings[];

  // seleção de elemento
  private selectRanking : IRankings;

  // a lista de municípios, ordenada pela dimensão escolhida
  public rankingOrdenado: IRankings[];

  public errorMessage: string = null;



  // constroi a estrutura 'top5Cidades'
  constructor(private rankingsService: RankingsService,
              private gradacoes: GradacoesDeCores) {
    rankingsService.fetchRankings().subscribe(response => {
      this.ranking = response;
      this.ngOnChanges();
    }, error => this.errorMessage = < any > error);
  };

  ngOnChanges() {
    if (this.ranking) {
      this.rankingOrdenado = this.ranking.sort((e1, e2) => (e2[this.dimensao]*e2[this.dimensao]+e2.geral) - (e1[this.dimensao]*e1[this.dimensao]+e1.geral));
    }
  }
  onSelect(ranking:IRankings):void{
    this.selectRanking = ranking;
  }


}
