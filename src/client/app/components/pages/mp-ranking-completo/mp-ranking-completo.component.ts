// libs
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions} from '../../../shared/core/index';

import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'mp-ranking-completo',
  templateUrl: 'mp-ranking-completo.component.html',
  styleUrls: ['mp-ranking-completo.component.css']
})
export class MPRankingCompletoComponent implements OnInit {

  municipio: string;
  dimensao:  string;

  constructor(private injector: Injector, private route:ActivatedRoute, public routerext: RouterExtensions) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.municipio = params['municipio'] || 'estado';
      this.dimensao  = params['dimensao']  || 'geral';
    });
  }

}
