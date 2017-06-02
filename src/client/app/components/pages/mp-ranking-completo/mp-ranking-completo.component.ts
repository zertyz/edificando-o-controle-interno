// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../shared/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-ranking-completo',
  templateUrl: 'mp-ranking-completo.component.html',
  styleUrls: ['mp-ranking-completo.component.css']
})
export class MPRankingCompletoComponent {

  constructor(private injector: Injector, public routerext: RouterExtensions) {}

}
