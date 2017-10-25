/** <pre>
 * r-status-fase.component
 * =======================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta visualmente a nota do município, através de uma imagem ilustrativa (prédio)
 * com a descrição do status atual e os pontos a melhorar
 *
 * Recebe as seguintes propriedades:
 *  concorrente:       o elemento (município) para o qual deve se apresentar o status ou a fase do progresso.
 *                     Pode ser uma string com o nome exato do concorrente (município), ou um número, com sua posição no array do ranking,
 *                     começando em zero;
 *  dimensao:          o nome do campo de 'IRankings' que contém as notas que devem ser usadas para classificação.
 *  dimensaoPrincipal: idem, porém contém o nome do campo da dimensão que representa a classificação principal, para comparação.
 *
 * Exemplo de uso:
 *
 *  <r-status-fase concorrente="Rio de Janeiro" dimensao="transparencia" dimensaoPrincipal="geral"></e-status-fase>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../../modules/core/index';
import { Input } from '@angular/core';

// services
import { RankingsService }   from '../services/rankings.service';
import { IRankings }         from '../model/IRankings';
import { IDadosConcorrente } from '../model/IDadosConcorrente';

// module libs
import { RegrasDeApresentacao } from '../RegrasDeApresentacao';


@Component({
  moduleId:     module.id,
  selector:    'r-status-fase',
  templateUrl: 'r-status-fase.component.html',
  styleUrls:  ['r-status-fase.component.css']
})
export class RStatusFaseComponent {

  // parâmetros do componente
  @Input() concorrente:       string = '0';
  @Input() dimensao:          string = '§§ DIMENSÃO §§';
  @Input() dimensaoPrincipal: string = '§§ DIMENSÃO PRINCIPAL §§';
  public   nomeConcorrente:   string = '§§ MUNICIPIO §§';

  // dados dos JSONs
  public rankings:             IRankings[];
  public dadosDosConcorrentes: IDadosConcorrente[];

  // dados consolidados
  public notaPrincipal:      number = -1;
  public posicaoPrincipal:   number = -1;
  public nota:               number = -1;
  public posicao:            number = -1;
  public dadosDoConcorrente: IDadosConcorrente;

  // mensagens de erro
  public rankingsErrorMessage:             string = null;
  public dadosDosConcorrentesErrorMessage: string = null;


  constructor(private rankingsService: RankingsService,
              private gradacoes: RegrasDeApresentacao) {

    this.setDefaultDadosDoConcorrente();

    // rankings
    rankingsService.fetchRankings().subscribe(response => {
      this.rankings = response;
      this.ngOnChanges();
    }, error => this.rankingsErrorMessage = < any > error);

    // dados dos municípios
    rankingsService.fetchDadosMunicipios().subscribe(response => {
      this.dadosDosConcorrentes = response;
      this.ngOnChanges();
    }, error => this.dadosDosConcorrentesErrorMessage = < any > error);
  }

  setDefaultDadosDoConcorrente() {
    this.dadosDoConcorrente = {
      municipio:                      'desconhecido',
      populacaoProjetada2016:         'desconhecido',
      orcamento2015:                  'desconhecido',
    };
  }

  // a cada mudança nos parâmetros, 'nota' e 'posicao' são recomputados
  ngOnChanges() {
    this.posicao = -1;
    this.nota    = -1;
    if (this.rankings != null) {
      let rankingOrdenadoPorDimensao:      IRankings[] = this.rankings.sort( (e1, e2) => (e2[this.dimensao]*e2[this.dimensao]+e2.geral) - (e1[this.dimensao]*e1[this.dimensao]+e1.geral));

      // encontra 'elemento' baseado no índice (se 'município' for um número) ou no nome do município (se for uma string)
      let elemento: IRankings;
      if (isNaN(Number(this.concorrente))) {
        elemento = rankingOrdenadoPorDimensao.find(e => e.municipio == this.concorrente);
      } else {
        elemento = this.rankings[Number(this.concorrente)];
      }
      if (elemento) {
        this.nomeConcorrente = elemento.municipio;
        this.posicao = 1 + rankingOrdenadoPorDimensao.indexOf(elemento);
        this.nota    = elemento[this.dimensao];
        if (this.dadosDosConcorrentes) {
          this.dadosDoConcorrente = this.dadosDosConcorrentes.find(e => e.municipio == this.nomeConcorrente);
        }

        // computa dados da dimensão principal
        let rankingOrdenadoPorDimensaoPrincipal: IRankings[] = this.rankings.sort( (e1, e2) => e2[this.dimensaoPrincipal] - e1[this.dimensaoPrincipal]);
        this.posicaoPrincipal = 1 + rankingOrdenadoPorDimensaoPrincipal.indexOf(elemento);
        this.notaPrincipal    = elemento[this.dimensaoPrincipal];

      }
    }

    if (!this.dadosDoConcorrente) {
      this.setDefaultDadosDoConcorrente();
    }

  }

}
