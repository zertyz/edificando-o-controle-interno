// libs
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions} from '../../../shared/core/index';

import { ActivatedRoute } from '@angular/router';

// module libs TODO: refactoring: gradações de cores poderia ser provided pelo aplicativo? para poder ser compartilhado com todos... ?
//import { GradacoesDeCores } from '../GradacoesDeCores';


@Component({
  moduleId: module.id,
  selector: 'mp-ranking-completo',
  templateUrl: 'mp-ranking-completo.component.html',
  styleUrls: ['mp-ranking-completo.component.css']
})
export class MPRankingCompletoComponent implements OnInit {

  // transformações do nome do campo para o título, na ordem em que devem aparecer.
  listaDeDimensoesETitulos: string[][] = [
    ['geral',                    'Geral'],
    ['auditoria',                'Auditoria'],
    ['ouvidoria',                'Ouvidoria'],
    ['correicao',                'Correição'],
    ['controladoria',            'Controladoria'],
    ['transparencia',            'Transparência'],
    ['auxilioAoControleExterno', 'Auxílio ao Controle Externo'],
    ['estrutura',                'Estrutura'],
    ['abrangencia',              'Abrangência'],
    ['autonomia',                'Autonomia'],
    ['regulamentacao',           'Regulamentação'],
    ['orcamento',                'Orçamento'],
    ['planejamento',             'Planejamento'],
    ['evolucao',                 'Evolução'],
    ['resolutividade',           'Resolutividade'],
    ['concretizacao',            'Concretização de Políticas Públicas'],
    ['iniciativaLouvavel',       'Iniciativa Louvável'],
  ];
  mapaDeDimensoesParaTitulos: any = {};

  municipio: string;
  dimensao:  string;

  constructor(private injector: Injector,
              private route:ActivatedRoute,
              public routerext: RouterExtensions) {
    for (let campo of this.listaDeDimensoesETitulos) {
      this.mapaDeDimensoesParaTitulos[campo[0]] = campo[1];
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.municipio = params['municipio'] || '0';
      this.dimensao  = params['dimensao']  || 'geral';
    });
  }

  trocaRanking(novaDimensao: string) {
    this.municipio = '0';
    this.dimensao = novaDimensao;
    this.routerext.navigate([`/mp-ranking-completo/0/${novaDimensao}`]);
  }

}
