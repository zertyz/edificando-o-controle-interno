// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../shared/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-fale-com-o-mprj',
  templateUrl: 'mp-fale-com-o-mprj.component.html',
  styleUrls: ['mp-fale-com-o-mprj.component.css']
})
export class MPFaleComOMPRJComponent {

  constructor(private injector: Injector, public routerext: RouterExtensions) {}

}
