/** <pre>
 * e-status-edificacao.component
 * =============================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta visualmente a nota do município, através de uma imagem ilustrativa (prédio)
 * com a descrição do status atual e os pontos a melhorar
 *
 * Recebe as seguintes propriedades:
 *  municipio:         o município para o qual deve se apresentar o status da edificação do controle interno.
 *                     Pode ser uma string com o nome exato do município, ou um número, com sua posição no array do ranking
 *  dimensao:          o nome do campo de 'IRankings' que deve ser usado para ordenar os valores
 *
 * Exemplo de uso:
 *
 *  <e-status-edificacao municipio="Rio de Janeiro" dimensao="geral"></e-status-edificacao>
 *
 * @see RelatedClass(es)
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
import { IDadosMunicipio } from '../services/IDadosMunicipio';

// module libs
import { GradacoesDeCores } from '../GradacoesDeCores';


@Component({
  moduleId: module.id,
  selector: 'e-status-edificacao',
  templateUrl: 'e-status-edificacao.component.html',
  styleUrls: ['e-status-edificacao.component.css']
})
export class EStatusEdificacaoComponent {

  // parâmetros do componente
  @Input() municipio: string = '§§ MUNICIPIO §§';
  @Input() dimensao:  string = '§§ DIMENSÃO §§';

  // dados dos JSONs
  public rankings:        IRankings[];
  public dadosMunicipios: IDadosMunicipio[];

  // dados consolidados
  public notaGeral:        number = -1;
  public posicaoGeral:     number = -1;
  public nota:             number = -1;
  public posicao:          number = -1;
  public dadosDoMunicipio: IDadosMunicipio;

  public rankingsErrorMessage: string = null;
  public dadosMunicipiosErrorMessage: string = null;


  constructor(private rankingsService: RankingsService,
              private gradacoes: GradacoesDeCores) {

    this.setDefaultDadosDoMunicipio();

    // rankings
    rankingsService.fetchRankings().subscribe(response => {
      this.rankings = response;
      this.ngOnChanges();
    }, error => this.rankingsErrorMessage = < any > error);

    // dados dos municípios
    rankingsService.fetchDadosMunicipios().subscribe(response => {
      this.dadosMunicipios = response;
      this.ngOnChanges();
    }, error => this.dadosMunicipiosErrorMessage = < any > error);
  }

  setDefaultDadosDoMunicipio() {
    this.dadosDoMunicipio = {
      municipio:                      "desconhecido",
      populacaoProjetada2016:         "desconhecido",
      percentualPopulacionalEstadual: "desconhecido",
      orcamento2015:                  "desconhecido",
    };
  }

  // a cada mudança nos parâmetros, 'nota' e 'posicao' são recomputados
  ngOnChanges() {
    this.posicao = -1;
    this.nota    = -1;
    if (this.rankings != null) {
      let rankingOrdenadoPorDimensao:      IRankings[] = this.rankings.sort( (e1, e2) => e2[this.dimensao] - e1[this.dimensao]);

      // encontra 'elemento' baseado no índice (se 'município' for um número) ou no nome do município (se for uma string)
      let elemento: IRankings;
      if (isNaN(Number(this.municipio))) {
        elemento = rankingOrdenadoPorDimensao.find(e => e.municipio == this.municipio);
      } else {
        elemento = this.rankings[Number(this.municipio)];
        this.municipio = elemento.municipio;
      }
      if (elemento) {
        this.posicao = 1 + rankingOrdenadoPorDimensao.indexOf(elemento);
        this.nota    = elemento[this.dimensao];
        if (this.dadosMunicipios) {
          this.dadosDoMunicipio = this.dadosMunicipios.find(e => e.municipio == this.municipio);
        }

        // computa dados da dimensão geral
        let rankingOrdenadoPorDimensaoGeral: IRankings[] = this.rankings.sort( (e1, e2) => e2.geral - e1.geral);
        this.posicaoGeral = 1 + rankingOrdenadoPorDimensaoGeral.indexOf(elemento);
        this.notaGeral    = elemento.geral;

      }
    }

    if (!this.dadosDoMunicipio) {
      this.setDefaultDadosDoMunicipio();
    }

  }


}
