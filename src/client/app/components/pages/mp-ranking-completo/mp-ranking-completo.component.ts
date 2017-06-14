// libs
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions} from '../../../shared/core/index';

import { ActivatedRoute } from '@angular/router';

// module libs
import { GradacoesDeCores } from '../../../shared/modules/m-edificando-o-controle-interno/GradacoesDeCores';


@Component({
  moduleId: module.id,
  selector: 'mp-ranking-completo',
  templateUrl: 'mp-ranking-completo.component.html',
  styleUrls: ['mp-ranking-completo.component.css']
})
export class MPRankingCompletoComponent implements OnInit {

  municipio: string;
  dimensao:  string;

  constructor(private injector: Injector,
              private route:ActivatedRoute,
              public routerext: RouterExtensions,
              private gradacoes: GradacoesDeCores) {
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
