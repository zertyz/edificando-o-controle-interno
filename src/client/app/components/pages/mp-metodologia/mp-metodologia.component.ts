// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../shared/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-metodologia',
  templateUrl: 'mp-metodologia.component.html',
  styleUrls: ['mp-metodologia.component.css']
})
export class MPMetodologiaComponent {

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
