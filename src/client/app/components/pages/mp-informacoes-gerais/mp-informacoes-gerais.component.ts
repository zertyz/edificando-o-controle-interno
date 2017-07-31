// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-informacoes-gerais',
  templateUrl: 'mp-informacoes-gerais.component.html',
  styleUrls: ['mp-informacoes-gerais.component.css']
})
export class MPInformacoesGeraisComponent {

  constructor(private injector: Injector, public routerext: RouterExtensions) {}

}
