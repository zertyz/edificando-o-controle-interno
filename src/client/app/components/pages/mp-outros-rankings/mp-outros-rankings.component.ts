// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../shared/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-outros-rankings',
  templateUrl: 'mp-outros-rankings.component.html',
  styleUrls: ['mp-outros-rankings.component.css']
})
export class MPOutrosRankingsComponent {

  constructor(private injector: Injector, public routerext: RouterExtensions) {}

}
