/** <pre>
 * r-classificacao.component
 * =========================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta a lista de concorrentes (simplesmente chamada de "ranking") ordenado pela nota da dimensao escolhida.
 *
 * Recebe as seguintes propriedades:
 *  dimensao:         o nome de uma variável numérica da interface 'IRankings', usada para a ordenação dos concorrentes
 *
 * Exemplo de uso:
 *
 *  <r-classificacao dimensao="transparencia"></r-classificacao>
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

// config
import { DIMENSAO_PRINCIPAL } from '../RankingConfig';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../model/IRankings';

// business logic
import { RegrasDeApresentacao } from '../RegrasDeApresentacao';


@Component({
  moduleId: module.id,
  selector: 'r-classificacao',
  templateUrl: 'r-classificacao.component.html',
  styleUrls: ['r-classificacao.component.css']
})
export class RClassificacaoComponent {

  // parâmetros do componente
  @Input() dimensao:          string;

  // dados do JSON
  public ranking: IRankings[];

  // a lista de concorrentes, ordenada pela dimensão escolhida
  public rankingOrdenado: IRankings[];

  public errorMessage: string = null;

  // seleção de elemento
  private selectedElement : number;

  // constroi a estrutura 'top5Cidades'
  constructor(private rankingsService: RankingsService,
              private gradacoes: RegrasDeApresentacao) {
    rankingsService.fetchRankings().subscribe(response => {
      this.ranking = response;
      this.ngOnChanges();
    }, error => this.errorMessage = < any > error);
  }

  ngOnChanges() {
    if (this.ranking) {
      this.rankingOrdenado = this.ranking.sort((e1, e2) => (e2[this.dimensao]*e2[this.dimensao]+e2[DIMENSAO_PRINCIPAL]) - (e1[this.dimensao]*e1[this.dimensao]+e1[DIMENSAO_PRINCIPAL]));
    }
  }

  onSelect(element: number): void {
    this.selectedElement = element;
  }

}
