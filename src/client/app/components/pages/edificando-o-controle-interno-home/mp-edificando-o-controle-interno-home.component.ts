// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../shared/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-edificando-o-controle-interno-home',
  templateUrl: 'mp-edificando-o-controle-interno-home.component.html',
  styleUrls: ['mp-edificando-o-controle-interno-home.component.css']
})
export class MPEdificandoOControleInternoHomeComponent {

  constructor(private injector: Injector, public routerext: RouterExtensions) {
  }

  public gotoFaleComOMPRJ() {
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
