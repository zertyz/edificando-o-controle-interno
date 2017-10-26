/** <pre>
 * r-dimensoes.component
 * =====================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta a lista dos cards, cada um com sua nota, gráfico e mapa do resultado de uma dimensão específica.
 * ... todos para um município específico.
 *
 * Recebe as seguintes propriedades:
 *  concorrente:       o concorrente (município) para o qual se deve apresentar a lista de dimensões & notas.
 *                     Pode ser uma string com o nome exato do elemento (município), ou um número, com sua posição no array do ranking,
 *                     começando em zero.
 *  dimensao:          o nome do campo de 'IRankings' que deve ser usado para ordenar os valores
 *  ordenacao:         especifica como se deve ordenar a lista. Pode ter um dos valores: [ 'titulo', 'nota' ]
 *
 * Exemplo de uso:
 *
 *  <r-dimensoes concorrente="Rio de Janeiro" ordenacao="titulo"></r-dimensoes>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../../modules/core/index';
import { Input } from '@angular/core';

// config
import { CAMPOS_E_TITULOS_DAS_DIMENSOES,
         NOME_DO_CAMPO_DO_CONCORRENTE,
         DEFAULT_CUSTOM_RANKING_DATA     } from '../RankingConfig';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../model/IRankings';

// business logic
import { RegrasDeApresentacao } from '../RegrasDeApresentacao';
import {IDimension} from "../model/IDimension";

@Component({
  moduleId:     module.id,
  selector:    'r-dimensoes',
  templateUrl: 'r-dimensoes.component.html',
  styleUrls:  ['r-dimensoes.component.css']
})
export class RDimensoesComponent implements OnInit {

  // parâmetros do componente
  @Input() concorrente: string;
  @Input() dimensao:    string;
  @Input() ordenacao:   string;

  // dados do JSON
  public rankings: IRankings[];
  // a lista de candidatos, ordenada pela dimensão escolhida
  public notas: IRankings;
  // transformações do nome do campo para o título, na ordem em que devem aparecer. TODO: substituir por config.CAMPOS_E_TITULOS_DAS_DIMENSOES
  public linhasDeTitulosECamposDeDimensoes: IDimension[][] = [];

  public errorMessage: string = null;

  // inicializa a strutura com dados apresentáveis, porém vazios, até que sejam lidos e interpretados
  constructor(private rankingsService: RankingsService,
              private gradacoes: RegrasDeApresentacao) {

    this.notas = DEFAULT_CUSTOM_RANKING_DATA;

    rankingsService.fetchRankings().subscribe(response => {
      this.rankings = response;
      this.ngOnChanges();
    }, error => this.errorMessage = < any > error);

    // Monta a estrutura de apresentação dos títulos e notas das dimensões.
    // A estrutura tem formato tabular em duas dimensões, organizadas em linhas x colunas.
    let i: number = 0;
    LINHA: while (true) {

      let haElementos: boolean;
      let linhaDeTitulosECamposDeDimensoes: IDimension[] = [];   // elementos que serão apresentados em uma linha do template
      COLUNA: for (let x: number = 0; x<2; x++) {
        haElementos = CAMPOS_E_TITULOS_DAS_DIMENSOES[i] !== null;
        let tituloECampoDeDimensao: IDimension = (haElementos) ? CAMPOS_E_TITULOS_DAS_DIMENSOES[i++] : {nomeCampo: null, tituloDimensao: '-'};
        linhaDeTitulosECamposDeDimensoes.push(tituloECampoDeDimensao);
        if (!haElementos) {
          break COLUNA;
        }
      }

      this.linhasDeTitulosECamposDeDimensoes.push(linhaDeTitulosECamposDeDimensoes);

      if (!haElementos) {
        break LINHA;
      }
    }

  }

  ngOnInit() {
  }

  // a cada mudança nos parâmetros, 'notas' é repopulado
  ngOnChanges() {
    if (this.rankings != null) {
      let rankingOrdenadoPorDimensao: IRankings[] = this.rankings.sort( (e1, e2) => e2[this.dimensao] - e1[this.dimensao]);

      // encontra 'notas' baseado no índice (se 'candidato' for um número) ou no nome do candidato (se for uma string)
      if (isNaN(Number(this.concorrente))) {
        this.notas = rankingOrdenadoPorDimensao.find(e => e[NOME_DO_CAMPO_DO_CONCORRENTE] == this.concorrente);
      } else {
        this.notas = rankingOrdenadoPorDimensao[Number(this.concorrente)];
      }
    }
  }

}
