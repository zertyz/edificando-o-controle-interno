/** <pre>
 * e-dimensoes.component
 * =====================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta a lista dos cards, cada um com sua nota, gráfico e mapa do resultado de uma dimensão específica.
 * ... todos para um município específico.
 *
 * Recebe as seguintes propriedades:
 *  municipio:         o município para o qual se deve apresentar a lista de dimensões
 *  ordenacao:         especifica como se deve ordenar a lista. Pode ter um dos valores: [ 'titulo', 'nota' ]
 *
 * Exemplo de uso:
 *
 *  <e-dimensoes municipio="Rio de Janeiro" ordenacao="titulo"></e-dimensoes>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../services/IRankings';

// module libs
import { GradacoesDeCores } from '../GradacoesDeCores';

@Component({
  moduleId: module.id,
  selector: 'e-dimensoes',
  templateUrl: 'e-dimensoes.component.html',
  styleUrls: ['e-dimensoes.component.css']
})
export class EDimensoesComponent implements OnInit {

  @Input() municipio: string;
  @Input() ordenacao: string;

  // dados do JSON
  public rankings: IRankings[];
  // a lista de municípios, ordenada pela dimensão escolhida
  public notas: IRankings;
  // transformações do nome do campo para o título, na ordem em que devem aparecer.
  public mapaDeCamposParaTitulos: string[][] = [
    //['geral',                    'Classificação Geral'],
    ['auditoria',                'Auditoria' ,
     'ouvidoria',                'Ouvidoria'],
    ['correicao',                'Correição' ,
     'controladoria',            'Controladoria'],
    ['transparencia',            'Transparência' ,
     'auxilioAoControleExterno', 'Controle Externo'],
    ['estrutura',                'Estrutura' ,
     'abrangencia',              'Abrangência'],
    ['autonomia',                'Autonomia' ,
     'regulamentacao',           'Regulamentação'],
    ['orcamento',                'Orçamento' ,
     'planejamento',             'Planejamento'],
    ['evolucao',                 'Evolução' ,
     'resolutividade',           'Resolutividade'],
    ['concretizacao',            'Concretização de Políticas Públicas' ,
     'iniciativaLouvavel',       'Iniciativa Louvável'],
  ];

  public errorMessage: string = null;

  // inicializa a strutura com dados apresentáveis, porém vazios, até que sejam lidos e interpretados
  constructor(private rankingsService: RankingsService,
              private gradacoes: GradacoesDeCores) {
    this.notas = {
      cidade: "desconhecida",
      geral: -1,
      auditoria: -1,
      ouvidoria: -1,
      correicao: -1,
      controladoria: -1,
      estrutura: -1,
      evolucao: -1,
      planejamento: -1,
      transparencia: -1,
      auxilioAoControleExterno: -1,
      orcamento: -1,
      regulamentacao: -1,
      autonomia: -1,
      concretizacao: -1,
      abrangencia: -1,
      resolutividade: -1,
      iniciativaLouvavel: -1,
    };

    rankingsService.fetchRankings().subscribe(response => {
      this.rankings = response;
      this.ngOnChanges();
    }, error => this.errorMessage = < any > error);
  }

  ngOnInit() {
  };

  // a cada mudança nos parâmetros, 'notas' é repopulado
  ngOnChanges() {
    if (this.rankings != null) {
      this.notas = this.rankings.find(e => e.cidade == this.municipio);
    }
  }

}
